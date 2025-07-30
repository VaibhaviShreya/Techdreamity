import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    // Clear any previous messages when user starts typing
    if (message) setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.email || !form.password) {
      setMessage('Please fill in all fields');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch("https://techdreamity.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Login failed');
        return;
      }

      // Check if login was successful
      if (data.success && data.token) {
        setMessage('Login successful! Redirecting...');
        
        // Store authentication data
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        
        const username = data.email.split("@")[0];
        dispatch(login({ 
          email: data.email, 
          username,
          isAuthenticated: true 
        }));
        
        // Navigate after a short delay to show success message
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage(data.message || 'Login failed');
      }

    } catch (error) {
      console.error('Login error:', error);
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    setMessage('');

    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google User Info:", decoded);

      // Send token to backend for verification and authentication
      const res = await fetch('https://techdreamity.onrender.com/api/auth/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Google login failed');
        return;
      }

      if (data.success && data.token) {
        setMessage('Google login successful! Redirecting...');
        
        // Store authentication data
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        
        const username = data.email.split("@")[0];
        dispatch(login({ 
          email: data.email, 
          username,
          isAuthenticated: true,
          name: data.user?.name || decoded.name,
          picture: data.user?.picture || decoded.picture
        }));
        
        // Navigate after a short delay
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage(data.message || 'Google login failed');
      }

    } catch (error) {
      console.error('Google login error:', error);
      setMessage("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    console.error("Google login failed");
    setMessage("Google login failed. Please try again.");
  };

  return (
    <div className="mt-[4ch] min-h-screen flex items-center justify-center bg-sky-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Sign In</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              autoComplete="email"
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Message Display */}
        {message && (
          <div className={`mt-4 p-3 rounded-md text-sm text-center ${
            message.includes('successful') 
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message}
          </div>
        )}

        <p className="text-sm text-center mt-8 text-gray-600">
          Don't have an account?{' '}
          <Link 
            to="/register" 
            className="text-sky-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>

        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          
          <GoogleLogin 
            onSuccess={handleGoogleSuccess} 
            onError={handleGoogleError}
            disabled={loading}
          />
        </div>

        {/* Forgot Password Link (optional) */}
        <div className="text-center mt-4">
          <Link 
            to="/forgot-password" 
            className="text-sm text-sky-600 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
