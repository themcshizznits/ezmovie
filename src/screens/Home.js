import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <header className="home-header">
        <h2>Welcome back, Movie Buff!</h2>
        <div className="header-icons">
          <span role="img" aria-label="profile">👤</span>
          <span role="img" aria-label="mail">📩</span>
        </div>
      </header>

      {/* 🚪 Log Out Button */}
      <button className="logout-button" onClick={() => navigate('/')}>
        🚪 Log Out
      </button>

      <section className="watchlist-section">
        <h3>Continue Your Watchlist</h3>
        <div className="watchlist-buttons">
          <button>Action<br /><small>Drama Hits</small></button>
          <button>Thriller<br /><small>Classic Films</small></button>
          <button>New<br /><small>Must Watch</small></button>
        </div>
        <button className="see-all">See All</button>
      </section>

      <section className="recommend-section">
        <h3>Recommended for You</h3>
        <div className="recommend-boxes">
          <div className="box">Top Picks For You</div>
          <div className="box">Trending Now<br /><small>Watchlist Favorites</small></div>
        </div>
        <button className="explore-button">Explore</button>
      </section>

      <section className="featured-section">
        <h3>Featured Films</h3>
        <ul>
          <li><input type="checkbox" /> 🎬 Mind-Bending Thriller – Inception</li>
          <li><input type="checkbox" /> 🎥 Timeless Masterpiece – The Godfather</li>
          <li><input type="checkbox" /> 🍿 Latest Hits – Top Box Office</li>
        </ul>
      </section>

      <nav className="bottom-nav">
        <span onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>🏠</span>
        <span onClick={() => navigate('/discover')} style={{ cursor: 'pointer' }}>🔍</span>
        <span onClick={() => navigate('/queue')} style={{ cursor: 'pointer' }}>⬇️</span>
        <span onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>👤</span>
      </nav>
    </div>
  );
}

export default Home;
