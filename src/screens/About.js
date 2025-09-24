import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './About.css';

function About() {
  const navigate = useNavigate(); // ✅ Add this

  return (
    <div className="about-screen">
      <header className="about-header">
        <span role="img" aria-label="menu">📂</span>
        <div>
          <h2>About</h2>
          <p>Discover EZTechMovie</p>
        </div>
      </header>

      <div className="logo-placeholder">🎬</div>

      <section className="team-section">
        <h3>Our Team</h3>
        <p>Meet the creators!</p>
        <div className="team-grid">
          <div className="team-member">
            <div className="avatar">🧠</div>
            <h4>Rubi</h4>
            <p>Creative Vision</p>
          </div>
          <div className="team-member">
            <div className="avatar">💻</div>
            <h4>Charles</h4>
            <p>Engineering Lead</p>
          </div>
        </div>
      </section>

      <nav className="bottom-nav">
        <span onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>🏠</span>
        <span onClick={() => navigate('/discover')} style={{ cursor: 'pointer' }}>🔍</span>
        <span onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>👤</span>
      </nav>
    </div>
  );
}

export default About;
