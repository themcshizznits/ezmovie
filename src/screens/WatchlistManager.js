// src/screens/WatchlistManager.js
import React, { useState, useEffect } from 'react';
import './WatchlistManager.css';

function WatchlistManager() {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    if (!newMovie.trim()) return;
    const updated = [...watchlist, { title: newMovie, completed: false }];
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
    setNewMovie('');
  };

  const deleteMovie = (index) => {
    const updated = watchlist.filter((_, i) => i !== index);
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  const toggleComplete = (index) => {
    const updated = watchlist.map((movie, i) =>
      i === index ? { ...movie, completed: !movie.completed } : movie
    );
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  const editMovie = (index, newTitle) => {
    const updated = watchlist.map((movie, i) =>
      i === index ? { ...movie, title: newTitle } : movie
    );
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  return (
    <div className="watchlist-manager">
      <h2>📋 My Watchlist</h2>
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
              onChange={(e) => editMovie(index, e.target.value)}
            />
            <button onClick={() => toggleComplete(index)}>✔️</button>
            <button onClick={() => deleteMovie(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchlistManager;
