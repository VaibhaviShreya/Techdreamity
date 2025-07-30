const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Input validation middleware
const validateInput = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ 
      success: false,
      message: "Email and password are required" 
    });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false,
      message: "Please provide a valid email address" 
    });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ 
      success: false,
      message: "Password must be at least 6 characters long" 
    });
  }
  
  next();
};

// Register with email/password
router.post("/register", validateInput, async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: "User with this email already exists" 
      });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create new user
    const user = await User.create({ 
      email: email.toLowerCase(),
      password: hashedPassword,
      authProvider: 'local'
    });

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email 
      },
      process.env.JWT_SECRET || 'fallback-secret-key',
      { expiresIn: "24h" }
    );

    console.log('✅ New user registered:', user.email);

    res.status(201).json({ 
      success: true,
      message: "User registered successfully",
      token, 
      email: user.email,
      user: {
        id: user._id,
        email: user.email,
        authProvider: user.authProvider
      }
    });

  } catch (err) {
    console.error('Registration error:', err);
    
    // Handle duplicate key error
    if (err.code === 11000) {
      return res.status(400).json({ 
        success: false,
        message: "User with this email already exists" 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: "Registration failed. Please try again.",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Login with email/password
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      success: false,
      message: 'Email and password are required' 
    });
  }

  try {
    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'No account found with this email address' 
      });
    }

    // Check if user registered with Google
    if (user.authProvider === 'google' && !user.password) {
      return res.status(400).json({ 
        success: false,
        message: 'This account was created with Google. Please use Google Sign-In.' 
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid email or password' 
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email 
      },
      process.env.JWT_SECRET || 'fallback-secret-key',
      { expiresIn: '24h' }
    );

    console.log('✅ User logged in:', user.email);

    res.json({ 
      success: true,
      message: "Login successful",
      token, 
      email: user.email,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        authProvider: user.authProvider
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ 
      success: false,
      message: 'Login failed. Please try again.' 
    });
  }
});

// Google Sign-In
router.post("/google-login", async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'Google token is required'
    });
  }

  try {
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email not provided by Google'
      });
    }

    // Find or create user
    let user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      // Create new user
      user = await User.create({
        googleId,
        email: email.toLowerCase(),
        name,
        picture,
        authProvider: 'google',
        isVerified: true
      });
      console.log('✅ New Google user created:', email);
    } else {
      // Update existing user with Google info
      if (!user.googleId) {
        user.googleId = googleId;
        user.picture = picture;
        user.authProvider = 'google';
        user.isVerified = true;
      }
      user.lastLogin = new Date();
      await user.save();
      console.log('✅ Existing user logged in with Google:', email);
    }

    // Generate JWT token
    const jwtToken = jwt.sign(
      { 
        userId: user._id,
        email: user.email 
      },
      process.env.JWT_SECRET || 'fallback-secret-key',
      { expiresIn: "24h" }
    );

    res.status(200).json({
      success: true,
      message: 'Google login successful',
      token: jwtToken,
      email: user.email,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        authProvider: user.authProvider
      }
    });

  } catch (err) {
    console.error('Google login error:', err);
    
    if (err.message.includes('Token used too late')) {
      return res.status(400).json({
        success: false,
        message: 'Google token has expired. Please try logging in again.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Google authentication failed. Please try again.',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Logout route (optional)
router.post('/logout', (req, res) => {
  // Since we're using stateless JWT, logout is handled on the client side
  res.json({ 
    success: true,
    message: 'Logged out successfully' 
  });
});

module.exports = router;