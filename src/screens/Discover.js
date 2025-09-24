import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Discover.css';

function Discover() {
  const navigate = useNavigate();

  return (
    <div className="discover-screen">
      <header className="discover-header">
        <h2>Discover Movies</h2>
        <span role="img" aria-label="search">🔍</span>
      </header>

      <section className="latest-releases">
        <div className="movie-placeholder">🎞️</div>
        <button className="add-button">➕ Add to</button>
      </section>

      <section className="popular-genres">
        <h3>Popular Genres</h3>
        <div className="genre-buttons">
          <button>⭐ Must-watch</button>
          <button>💬 User Reviews</button>
          <button>🎬 Movie</button>
          <button>👍 Watchlist Favorites</button>
        </div>
      </section>

      <section className="recommendations">
        <h3>Recommendations for You</h3>
        <div className="recommend-buttons">
          <button>❤️ Top Picks This Week</button>
          <button>📋 Queue Now</button>
        </div>
      </section>

      <nav className="bottom-nav">
        <span onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>🏠</span>
        <span>🔍</span>
        <span>➕</span>
        <span>🔔</span>
        <span>👤</span>
      </nav>
    </div>
  );
}

export default Discover;
