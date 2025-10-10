// src/screens/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        localStorage.setItem('user', JSON.stringify(result.user));
        navigate('/home');
      })
      .catch(error => console.error('Login failed:', error));
  };

  return (
    <div className="login-screen">
      <div className="logo-placeholder">🎬</div>
      <h1 className="title">EzTechMovie</h1>
      <p className="tagline">Your Cinematic Universe Awaits</p>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">📧 Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">🔒 Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>

        <button type="submit" className="login-button">Log In</button>
      </form>

      <div className="divider">or</div>

      <div className="social-buttons">
        <button className="google-button" onClick={handleGoogleLogin}>Sign in with Google</button>
      </div>

      <div className="signup-prompt">
        New here? <a href="#">Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
