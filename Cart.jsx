import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orderService } from '../../services/orderService';
import './Cart.css';

const Cart = () => {
  const [placing, setPlacing] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    setPlacing(true);
    try {
      await orderService.placeOrder();
      navigate('/orders');
    } catch (err) {
      alert('Failed to place order. Please try again.');
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-empty">
        <p>Your cart is empty.</p>
        <a href="/products">Continue Shopping →</a>
      </div>
    </div>
  );
};

export default Cart;
