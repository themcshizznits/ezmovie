import React from 'react';
import list from './data'; // your subscription data
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Subscriptions.css';

function Subscriptions() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="subscriptions-screen">
      <h2>📦 Subscriptions</h2>
      <p className="subtitle">Choose your cinematic companion. Add a subscription to begin your journey.</p>

      <div className="subscription-grid">
        {list.map(item => (
          <div key={item.id} className="subscription-card">
            <img src={item.img} alt={item.service} />
            <h3>{item.service}</h3>
            <p>{item.serviceInfo}</p>
            <p className="price">${item.price}</p>
            <button className="add-button" onClick={() => addToCart(item)}>
              ⭐ Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button className="back-home-button" onClick={() => navigate('/home')}>
        ⬅️ Back to Home
      </button>
    </div>
  );
}

export default Subscriptions;
