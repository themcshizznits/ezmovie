import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    // You can add validation or auth logic here later
    navigate('/home'); // Navigate to Home screen
  };

  return (
    <div className="login-screen">
      <div className="logo-placeholder">O</div>

      <h1 className="title">EzTechMovie</h1>
      <p className="tagline">Manage your movie queue effortlessly</p>

      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">📧 Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">🔒 Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>

        <button type="submit" className="login-button">Log In</button>
      </form>

      <div className="divider">or Sign</div>

      <div className="social-buttons">
        <button className="facebook-button">Facebook</button>
        <button className="google-button">Google</button>
      </div>

      <div className="signup-prompt">
        New here? <a href="#">Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
