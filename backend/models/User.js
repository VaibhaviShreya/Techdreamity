const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    sparse: true // Allows multiple null values but ensures uniqueness when not null
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: function() {
      // Password is required only for non-Google users
      return !this.googleId;
    },
    minlength: 6
  },
  picture: {
    type: String,
    default: null
  },
  authProvider: {
    type: String,
    enum: ['google', 'local'],
    default: 'local'
  },
  isVerified: {
    type: Boolean,
    default: function() {
      return this.authProvider === 'google'; // Google users are pre-verified
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
});

// Compound index for better performance
userSchema.index({ email: 1, googleId: 1 });

// Pre-save middleware to update lastLogin
userSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.lastLogin = new Date();
  }
  next();
});

module.exports = mongoose.model("User", userSchema);