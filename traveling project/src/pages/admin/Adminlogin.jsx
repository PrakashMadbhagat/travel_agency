import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api'; 

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to toggle the popup visibility
  const [otp, setOtp] = useState(''); // State for OTP input
  const [adminEmail, setAdminEmail] = useState(''); // Admin email for the popup

  // Handle login request
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API.BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);

        // Save token in localStorage
        localStorage.setItem('adminToken', data.token);

        // Navigate to admin dashboard
        navigate('/admin/');
      } else {
        console.error('Login failed:', data.message || 'Unknown error');
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Network error:', error.message);
      alert('Network error, please try again');
    }
  };

  // Handle forgot password request (fetch admin email)
  const handleForgotPassword = async () => {
    try {
      const response = await fetch(`${API.BASE_URL}/user/admin-email`);
      const data = await response.json(); // data = "prakashmadbhagat861@gmail.com"
  
      if (response.ok) {
        console.log('Admin email fetched:', data);
        setAdminEmail(data); // Directly set data (email string)
  
        alert(`Admin email is: ${data}`); // Correct, show the email string
  
        // Step 2: Send the email to forgot-password API
        const forgotPasswordResponse = await fetch(`${API.BASE_URL}/user/forgot-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: data }), // Directly pass data
        });
  
        const forgotPasswordData = await forgotPasswordResponse.json();
  
        if (forgotPasswordResponse.ok) {
          console.log('OTP sent successfully to:', data);
          alert('OTP sent successfully! Please check your email.');
          setShowPopup(true);
        } else {
          console.error('Failed to send OTP:', forgotPasswordData.message || 'Unknown error');
          alert(forgotPasswordData.message || 'Failed to send OTP');
        }
  
      } else {
        console.error('Failed to fetch admin email:', data.message || 'Unknown error');
        alert(data.message || 'Failed to fetch admin email');
      }
    } catch (error) {
      console.error('Network error:', error.message);
      alert('Network error, please try again');
    }
  };
  
  const handleOtpSubmit = async () => {
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }
  
    try {
      const otpResponse = await fetch(`${API.BASE_URL}/user/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: adminEmail, otp }), // Send both email and otp
      });
  
      const otpData = await otpResponse.json(); // Parse the response body as JSON
  
      if (otpResponse.ok) {
        console.log('OTP submitted successfully:', otp);
        alert('OTP verified successfully!');
        setShowPopup(false);
        navigate('/admin/set-new-password'); // Navigate on success
      } else {
        console.error('OTP verification failed:', otpData.message || 'Unknown error');
        alert(otpData.message || 'OTP verification failed');
      }
    } catch (error) {
      console.error('Network error:', error.message);
      alert('Network error during OTP verification, please try again');
    }
  };
  
  
  

  // otp submit 
  

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
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

      {/* OTP Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content text-center p-4 shadow-lg rounded">
            <h3>Enter OTP for {adminEmail}</h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button className="btn btn-primary w-100 mb-2" onClick={handleOtpSubmit}>
              Submit OTP
            </button>
            <button className="btn btn-secondary w-100" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Inline CSS */}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-content {
          background-color: white;
          width: 100%;
          max-width: 400px;
          border-radius: 8px;
          text-align: center;
        }

        .popup button {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
