import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <nav className="nav-bar">
      <button onClick={() => navigate('/subscriptions')}>📦 Subscriptions</button>
      <button onClick={() => navigate('/cart')}>🛒 Cart ({totalItems})</button>
      <button onClick={() => navigate('/queue')}>📋 Queue</button>
      <button onClick={() => navigate('/home')}>🏠 Home</button>
    </nav>
  );
}

export default NavBar;
