// src/screens/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [warning, setWarning] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  function triggerWarning(message) {
    setWarning(message);
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 2000);
  }

  function addToCart(item) {
    const existing = cartItems.find(i => i.id === item.id);

    if (item.type === "subscription") {
      const existingSubscription = cartItems.find(i => i.type === "subscription");

      if (existingSubscription && existingSubscription.id !== item.id) {
        triggerWarning("⚠️ Only one subscription allowed at a time.");
        return;
      }

      if (existing) {
        triggerWarning("⚠️ Subscription quantity is limited to one.");
        return;
      }
    }

    const updated = existing
      ? cartItems.map(i =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        )
      : [...cartItems, { ...item, amount: 1 }];

    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
    setWarning(null);
    setShowWarning(false);
  }

  function removeFromCart(id) {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  }

  function updateCartItemAmount(id, newAmount) {
    const item = cartItems.find(i => i.id === id);

    if (item?.type === "subscription" && newAmount > 1) {
      triggerWarning("⚠️ You can only have one subscription.");
      return;
    }

    const updated = cartItems.map(i =>
      i.id === id ? { ...i, amount: newAmount } : i
    );

    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
    setWarning(null);
    setShowWarning(false);
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemAmount,
      warning,
      showWarning,
      triggerWarning
    }}>
      {children}
    </CartContext.Provider>
  );
}
