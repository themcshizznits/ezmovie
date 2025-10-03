// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Profile from './screens/Profile';
import About from './screens/About';
import Subscriptions from './screens/Subscriptions';
import Cart from './screens/Cart';
import Search from './screens/Search';
import WatchlistManager from './screens/WatchlistManager';
import NavBar from './screens/NavBar';
import { CartProvider } from './screens/CartContext';

function AppContent() {
  const location = useLocation();
  const hideNav = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
      {!hideNav && <NavBar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<WatchlistManager />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
