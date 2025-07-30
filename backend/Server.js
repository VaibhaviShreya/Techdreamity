const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
const cors = require("cors");

// CORS configuration
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// Email route
app.post("/send-email", upload.single("file"), async (req, res) => {
  const { name, email, phone, program, service, message } = req.body;
  const file = req.file;

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_TO,
    subject: `Contact Form: ${service || name}`, // Use service if available
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Program: ${program}
Service: ${service || 'Not specified'}
Message: ${message}
    `,
    attachments: file
      ? [
          {
            filename: file.originalname,
            content: file.buffer,
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    message: "Server is running!", 
    timestamp: new Date().toISOString(),
    port: process.env.PORT || 5000
  });
});

// MongoDB Connection and Server Start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    
    // Start server only after DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 Server accessible at: http://localhost:${PORT}`);
      console.log(`💾 Database: Connected`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    
    // Start server anyway for development (without DB)
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} (Database not connected)`);
    });
  });

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...');
  await mongoose.connection.close();
  process.exit(0);
});