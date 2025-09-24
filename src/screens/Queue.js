import React from 'react';
import './Queue.css';

function Queue() {
  return (
    <div className="queue-screen">
      <header className="queue-header">
        <h2>My Movie Queue</h2>
        <span role="img" aria-label="search">🔍</span>
      </header>

      <div className="summary">🎥 25 movies, ⭐ 120 ratings</div>

      <section className="queue-section">
        <h3>Top Picks</h3>
        <p>10 movies, last updated 5m ago</p>
        <div className="thumbnail-row">
          <div className="large-thumb">🎬</div>
          <div className="small-thumbs">
            <div>🎞️</div>
            <div>🎞️</div>
            <div>🎞️</div>
          </div>
        </div>
      </section>

      <section className="queue-section">
        <h3>Top Rated <span role="img" aria-label="thumbs-up">👍</span></h3>
        <p>15 movies, last updated 1h ago</p>
        <div className="thumbnail-row">
          <div className="large-thumb">🎥</div>
          <div className="small-thumbs">
            <div>🎞️</div>
            <div>🎞️</div>
            <div>🎞️</div>
          </div>
        </div>
      </section>

      <section className="queue-section">
        <h3>User Reviews <span role="img" aria-label="reviews">💬</span></h3>
        <p>50 reviews, last updated 2h ago</p>
        <div className="thumbnail-row">
          <div className="large-thumb">📽️</div>
          <div className="small-thumbs">
            <div>🎞️</div>
            <div>🎞️</div>
            <div>🎞️</div>
          </div>
        </div>
      </section>

      <nav className="bottom-nav">
        <span>🏠</span>
        <span>📋</span>
        <span>➕</span>
        <span>👤</span>
        <span>⚙️</span>
      </nav>
    </div>
  );
}

export default Queue;
