import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <div className="header">
        <h2>Welcome to</h2>
      </div>

      <div className="image-placeholder">
        <div className="placeholder-box">🎬</div>
      </div>

      <h1 className="title flicker">EzTechMovie</h1>
      <p className="tagline">Your Cinematic Universe Awaits</p>

      <button className="action-button pulse" onClick={() => navigate('/login')}>
        ⭐ Start Watching
      </button>
    </div>
  );
}

export default Welcome;
