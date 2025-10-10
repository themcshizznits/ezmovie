// src/screens/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateCartItemAmount,
    warning,
    showWarning,
    triggerWarning
  } = useContext(CartContext);

  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);
  const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

  function updateAmount(id, newAmount, type) {
    if (type === "subscription" && newAmount > 1) {
      triggerWarning("⚠️ Subscription quantity is limited to one.");
      return;
    }

    if (newAmount >= 1) {
      updateCartItemAmount(id, newAmount);
    }
  }

  function handleCheckoutWithCard(index) {
    alert(`✅ Checked out with card ending in ${savedCards[index].cardNumber.slice(-4)}!`);

    // 💥 Clear localStorage
    localStorage.removeItem('cartItems');

    // 💥 Clear context state
    cartItems.forEach(item => removeFromCart(item.id));

    // 🏠 Redirect home
    navigate('/home');
  }

  return (
    <div className="cart-screen">
      <h2>🛒 Your Cart</h2>

      {showWarning && (
        <p className="warning-label" key={Date.now()}>
          {warning}
        </p>
      )}

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="cart-icon">🛒✨</div>
          <p>😢 Nothing here yet...</p>
          <p>Your cinematic journey awaits. Add a subscription to begin!</p>
          <button onClick={() => navigate('/subscriptions')}>📂 Browse Subscriptions</button>
        </div>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.img} alt={item.service} />
              <div className="item-details">
                <span>{item.service}</span>
                <span>${item.price} × {item.amount}</span>

                <div className="quantity-control">
                  <button
                    onClick={() => updateAmount(item.id, item.amount - 1, item.type)}
                    disabled={item.amount <= 1}
                  >
                    ➖
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => updateAmount(item.id, item.amount + 1, item.type)}
                  >
                    ➕
                  </button>
                </div>
              </div>

              <button className="cute-remove-button" onClick={() => removeFromCart(item.id)}>
                💔 Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>

      <button onClick={() => navigate('/checkout')}>
        💳 Proceed to Checkout
      </button>

      {savedCards.length > 0 && (
        <div className="saved-card-checkout">
          <h4>💳 Use Saved Card</h4>
          {savedCards.map((card, index) => (
            <div key={index}>
              <p>Card ending in {card.cardNumber.slice(-4)}</p>
              <button onClick={() => handleCheckoutWithCard(index)}>
                🛍️ Confirm Purchase
              </button>
            </div>
          ))}
        </div>
      )}

      <button className="back-home-button" onClick={() => navigate('/home')}>
        ⬅️ Back to Home
      </button>
    </div>
  );
}

export default Cart;
