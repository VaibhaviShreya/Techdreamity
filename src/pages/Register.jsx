import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { login } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    if (!email || !password) {
      setMsg('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password
      });

      console.log('Registration response:', res.data);

      if (res.data.success || res.data.token) {
        setMsg('Registered successfully: ' + res.data.email);
        
        // Store token and email
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.email);
          
          const username = res.data.email.split("@")[0];
          dispatch(login({ email: res.data.email, username }));
          
          // Navigate after successful registration
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      }
    } catch (err) {
      console.error('Register error:', err);
      const errorMessage = err.response?.data?.message || 'Registration failed';
      setMsg(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded Google user:', decoded);

      const res = await axios.post('http://localhost:5000/api/auth/google-login', {
        token: credentialResponse.credential,
      });

      console.log('Google login response:', res.data);

      if (res.data.success || res.data.token) {
        setMsg('Logged in with Google: ' + (res.data.email || decoded.email));
        
        // Store authentication data
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          const email = res.data.email || decoded.email;
          localStorage.setItem("email", email);
          
          const username = email.split("@")[0];
          dispatch(login({ email, username }));
          
          // Navigate after successful login
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      }
    } catch (err) {
      console.error('Google login error:', err);
      const errorMessage = err.response?.data?.message || 'Google login failed';
      setMsg('Google login failed: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            disabled={loading}
            required
          />

          <input
            type="password"
            placeholder="Password (min 6 characters)"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            disabled={loading}
            minLength={6}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="my-4 text-center text-gray-600">or</div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => setMsg('Google login error')}
            disabled={loading}
          />
        </div>

        {msg && (
          <p className={`mt-4 text-sm text-center ${
            msg.includes('successfully') || msg.includes('Logged in') 
              ? 'text-green-500' 
              : 'text-red-500'
          }`}>
            {msg}
          </p>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-blue-500 hover:underline"
              disabled={loading}
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;