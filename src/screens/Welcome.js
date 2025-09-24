import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <div className="header">
        <span role="img" aria-label="home">🏠</span> Welcome
      </div>

      <div className="image-placeholder">
        <div className="placeholder-box">X</div>
      </div>

      <h1 className="title">EzTechMovie</h1>
      <p className="tagline">Your Movie Queue</p>

      <button className="action-button" onClick={() => navigate('/login')}>
        ⭐ Start
      </button>
    </div>
  );
}

export default Welcome;
