import React, { useState } from 'react';
import API from '../../api'; 


const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSetPassword = async () => {
    if (!password || !confirmPassword) {
      setMessage('Both fields are required.');
      return;
    }

    if (!validatePassword(password)) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch(`${API.BASE_URL}/set-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          // You can pass email/token if needed
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your password has been successfully reset!');
      } else {
        setMessage(data.message || 'Failed to reset password.');
      }
    } catch (error) {
      setMessage('Something went wrong: ' + error.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Set New Password</h3>

      <div className="mb-3">
        <label>New Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsPasswordValid(validatePassword(e.target.value));
          }}
        />
      </div>

      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary w-100 mb-3"
        onClick={handleSetPassword}
        disabled={!isPasswordValid || password !== confirmPassword}
      >
        Set Password
      </button>

      {message && (
        <div className="alert alert-info text-center" role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default SetPassword;
