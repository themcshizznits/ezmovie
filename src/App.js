import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Subscriptions from './screens/Subscriptions';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Discover from './screens/Discover';
import About from './screens/About';
import CreditCardForm from './screens/CreditCardForm';
import ProtectedRoute from './screens/ProtectedRoute';
import { CartProvider } from './screens/CartContext';
import NavBar from './screens/NavBar';

function AppContent() {
  const location = useLocation();
  const hideNavOn = ['/']; // 👈 ONLY hide NavBar on login screen

  const showNav = !hideNavOn.includes(location.pathname);

  return (
    <>
      {showNav && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/subscriptions" element={<ProtectedRoute><Subscriptions /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/discover" element={<ProtectedRoute><Discover /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><CreditCardForm /></ProtectedRoute>} />
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
