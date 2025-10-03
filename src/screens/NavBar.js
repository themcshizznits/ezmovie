// src/screens/NavBar.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <nav className="nav-bar">
      <button onClick={() => navigate('/home')}>🏠 Home</button>
      <button onClick={() => navigate('/subscriptions')}>📦 Subscriptions</button>
      <button onClick={() => navigate('/search')}>🔍 Search</button>
      <button onClick={() => navigate('/profile')}>👤 Profile</button>
      <button onClick={() => navigate('/cart')}>🛒 Cart ({totalItems})</button>
      <button onClick={() => navigate('/about')}>📖 About</button>
    </nav>
  );
}

export default NavBar;
