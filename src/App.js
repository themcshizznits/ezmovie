import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Queue from './screens/Queue';
import Profile from './screens/Profile';
import About from './screens/About';
import Subscriptions from './screens/Subscriptions';
import Cart from './screens/Cart';
import NavBar from './screens/NavBar';
import { CartProvider } from './screens/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
