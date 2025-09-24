import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('watchlist');

  const movies = {
    watchlist: [
      { title: 'Inception', likes: 200 },
      { title: 'The Matrix', likes: 150 },
      { title: 'Chili Vibes', likes: 100 },
      { title: 'Epic Adventures', likes: 65 },
    ],
    rated: [],
    favorites: [],
  };

  return (
    <div className="profile-screen">
      <header className="profile-header">
        <div className="profile-pic">👤</div>
        <h2>Alex</h2>
        <button className="edit-button">Edit Profile</button>
        <div className="stats">
          <span>320 Following</span>
          <span>450 Followers</span>
        </div>
      </header>

      <div className="tabs">
        <button
          className={activeTab === 'watchlist' ? 'active' : ''}
          onClick={() => setActiveTab('watchlist')}
        >
          Watchlist
        </button>
        <button
          className={activeTab === 'rated' ? 'active' : ''}
          onClick={() => setActiveTab('rated')}
        >
          Rated
        </button>
        <button
          className={activeTab === 'favorites' ? 'active' : ''}
          onClick={() => setActiveTab('favorites')}
        >
          Favorites
        </button>
      </div>

      <section className="movie-list">
        {movies[activeTab].length === 0 ? (
          <p>No movies yet.</p>
        ) : (
          movies[activeTab].map((movie, index) => (
            <div key={index} className="movie-item">
              <div className="movie-thumb">🎞️</div>
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <p>{movie.likes} likes</p>
              </div>
              <span className="arrow">➡️</span>
            </div>
          ))
        )}
      </section>

      <nav className="bottom-nav">
        <span>🏠</span>
        <span>🔍</span>
        <span>🧭</span>
        <span>🔔</span>
      </nav>
    </div>
  );
}

export default Profile;
