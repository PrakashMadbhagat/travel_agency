import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API.BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful:', data);
        // You can redirect or store token here
      } else {
        console.error('Login failed:', data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Network error:', error.message);
    }
  };
  

  const handleForgotPassword = () => {
    navigate('/admin/SetPassword');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Admin Login</h2>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-100 mb-2" onClick={handleLogin}>
        Login
      </button>
      <div className="text-center">
        <button
          className="btn btn-link p-0 px-3"
          style={{ fontSize: '14px' }}
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
