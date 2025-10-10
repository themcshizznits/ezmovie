// src/screens/CreditCardForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreditCardForm.css';

function CreditCardForm() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { cardNumber, name, expiry, cvv };

    const existingCards = JSON.parse(localStorage.getItem('savedCards')) || [];

    if (existingCards.length >= 3) {
      alert('⚠️ You can only save up to 3 cards. Please delete one to add a new card.');
      return;
    }

    const updatedCards = [...existingCards, newCard];
    localStorage.setItem('savedCards', JSON.stringify(updatedCards));
    alert('💳 Card saved successfully!');
    navigate('/cart');
  };

  return (
    <div className="credit-card-form">
      <h2>💳 Enter Card Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) =>
            setCardNumber(
              e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
            )
          }
          required
        />
        <input
          type="text"
          placeholder="Name on Card"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength={4}
          required
        />
        <button type="submit">💾 Save Card</button>
      </form>
    </div>
  );
}

export default CreditCardForm;
