import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🛒 ShopEase</Link>
      </div>
      <div className="navbar-links">
        <Link to="/products">Products</Link>
        {user ? (
          <>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">My Orders</Link>
            <span className="navbar-user">Hi, {user.name.split(' ')[0]}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="btn-primary">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
