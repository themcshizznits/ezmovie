// src/screens/Search.js
import React, { useState, useEffect } from 'react';
import './Search.css';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem('searchResults');
    return saved ? JSON.parse(saved) : [];
  });

  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [addedToWatchlist, setAddedToWatchlist] = useState([]);
  const [addedToFavorites, setAddedToFavorites] = useState([]);

  const handleSearch = async () => {
    const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your actual TMDB key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.results);
      localStorage.setItem('searchResults', JSON.stringify(data.results));
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const addToWatchlist = (title) => {
    if (watchlist.some(movie => movie.title === title)) return;
    const updated = [...watchlist, { title, completed: false }];
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
    setAddedToWatchlist(prev => [...prev, title]);
    setTimeout(() => {
      setAddedToWatchlist(prev => prev.filter(t => t !== title));
    }, 2000);
  };

  const addToFavorites = (title) => {
    if (favorites.some(movie => movie.title === title)) return;
    const updated = [...favorites, { title }];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
    setAddedToFavorites(prev => [...prev, title]);
    setTimeout(() => {
      setAddedToFavorites(prev => prev.filter(t => t !== title));
    }, 2000);
  };

  return (
    <div className="search-screen">
      <h2>🔍 Search Movies</h2>
      <input
        type="text"
        placeholder="Enter movie title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="results-grid">
        {results.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>⭐ {movie.vote_average}</p>

            <button
              disabled={watchlist.some(m => m.title === movie.title)}
              className={watchlist.some(m => m.title === movie.title) ? 'disabled' : ''}
              onClick={() => addToWatchlist(movie.title)}
            >
              {addedToWatchlist.includes(movie.title) ? '✅ Added!' : '📋 Add to Watchlist'}
            </button>

            <button
              disabled={favorites.some(m => m.title === movie.title)}
              className={favorites.some(m => m.title === movie.title) ? 'disabled' : ''}
              onClick={() => addToFavorites(movie.title)}
            >
              {addedToFavorites.includes(movie.title) ? '✅ Added!' : '❤️ Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
