import React from 'react';
import './About.css';

function About() {
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
        <span>🏠</span>
        <span>🔍</span>
        <span>👤</span>
      </nav>
    </div>
  );
}

export default About;
