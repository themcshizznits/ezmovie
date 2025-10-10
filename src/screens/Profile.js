// src/screens/Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('watchlist');

  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [newMovie, setNewMovie] = useState('');

  const [savedCards, setSavedCards] = useState(() => {
    const stored = localStorage.getItem('savedCards');
    return stored ? JSON.parse(stored) : [];
  });

  // 🧠 Watchlist actions
  const addMovie = () => {
    if (!newMovie.trim()) return;
    const updated = [...watchlist, { title: newMovie, completed: false }];
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
    setNewMovie('');
  };

  const editWatchlistMovie = (index, newTitle) => {
    const updated = [...watchlist];
    updated[index].title = newTitle;
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  const deleteWatchlistMovie = (index) => {
    const updated = watchlist.filter((_, i) => i !== index);
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  const toggleComplete = (index) => {
    const updated = [...watchlist];
    updated[index].completed = !updated[index].completed;
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  // ❤️ Favorites actions
  const editFavorite = (index, newTitle) => {
    const updated = [...favorites];
    updated[index].title = newTitle;
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const deleteFavorite = (index) => {
    const updated = favorites.filter((_, i) => i !== index);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  // 💳 Card Manager actions
  const deleteCard = (index) => {
    const updated = savedCards.filter((_, i) => i !== index);
    setSavedCards(updated);
    localStorage.setItem('savedCards', JSON.stringify(updated));
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
        <button className={activeTab === 'watchlist' ? 'active' : ''} onClick={() => setActiveTab('watchlist')}>Watchlist</button>
        <button className={activeTab === 'rated' ? 'active' : ''} onClick={() => setActiveTab('rated')}>Rated</button>
        <button className={activeTab === 'favorites' ? 'active' : ''} onClick={() => setActiveTab('favorites')}>Favorites</button>
      </div>

      <section className="movie-list">
        {activeTab === 'watchlist' && (
          <div className="watchlist-manager">
            <input
              type="text"
              placeholder="Add a movie..."
              value={newMovie}
              onChange={(e) => setNewMovie(e.target.value)}
            />
            <button onClick={addMovie}>➕ Add</button>

            <ul>
              {watchlist.map((movie, index) => (
                <li key={index} className={movie.completed ? 'completed' : ''}>
                  <input
                    type="text"
                    value={movie.title}
                    onChange={(e) => editWatchlistMovie(index, e.target.value)}
                  />
                  <button onClick={() => toggleComplete(index)}>✔️</button>
                  <button onClick={() => deleteWatchlistMovie(index)}>🗑️</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'rated' && <p>No rated movies yet.</p>}

        {activeTab === 'favorites' && (
          <ul className="watchlist-manager">
            {favorites.length === 0 ? (
              <p>No favorites yet.</p>
            ) : (
              favorites.map((movie, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={movie.title}
                    onChange={(e) => editFavorite(index, e.target.value)}
                  />
                  <button onClick={() => deleteFavorite(index)}>🗑️</button>
                </li>
              ))
            )}
          </ul>
        )}
      </section>

      {/* 💳 Card Manager */}
      {savedCards.length > 0 && (
        <section className="card-manager">
          <h3>💳 Saved Cards</h3>
          <ul>
            {savedCards.map((card, index) => (
              <li key={index}>
                <span>•••• •••• •••• {card.cardNumber.slice(-4)}</span>
                <span>{card.name} — {card.expiry}</span>
                <button onClick={() => deleteCard(index)}>🗑️ Delete</button>
              </li>
            ))}
          </ul>
          <p className="card-limit-note">
            {savedCards.length}/3 cards saved. Delete one to add a new card.
          </p>
        </section>
      )}

      <nav className="bottom-nav">
        <span onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>🏠</span>
        <span onClick={() => navigate('/discover')} style={{ cursor: 'pointer' }}>🔍</span>
        <span onClick={() => navigate('/queue')} style={{ cursor: 'pointer' }}>🧭</span>
        <span onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>🔔</span>
      </nav>
    </div>
  );
}

export default Profile;
