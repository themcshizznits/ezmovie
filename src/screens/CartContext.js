import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
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

    if (existing) {
      setCartItems(prev =>
        prev.map(i =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...item, amount: 1 }]);
    }

    setWarning(null);
    setShowWarning(false);
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  function updateCartItemAmount(id, newAmount) {
    const item = cartItems.find(i => i.id === id);

    if (item?.type === "subscription" && newAmount > 1) {
      triggerWarning("⚠️ You can only have one subscription.");
      return;
    }

    setCartItems(prev =>
      prev.map(i =>
        i.id === id ? { ...i, amount: newAmount } : i
      )
    );

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
