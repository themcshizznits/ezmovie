import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
      setCartItems(prev =>
        prev.map(i =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...item, amount: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  function updateCartItemAmount(id, newAmount) {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, amount: newAmount } : item
      )
    );
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemAmount }}>
      {children}
    </CartContext.Provider>
  );
}
