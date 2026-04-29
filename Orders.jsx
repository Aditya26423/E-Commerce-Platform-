import React, { useState, useEffect } from 'react';
import { orderService } from '../../services/orderService';
import './Orders.css';

const statusColors = {
  PENDING: '#f59e0b',
  CONFIRMED: '#3b82f6',
  SHIPPED: '#8b5cf6',
  DELIVERED: '#10b981',
  CANCELLED: '#ef4444',
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    orderService.getOrders()
      .then(setOrders)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="orders-loading">Loading orders...</div>;

  return (
    <div className="orders-page">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <div className="orders-empty">No orders yet. <a href="/products">Start shopping →</a></div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div>
                  <span className="order-id">Order #{order.id}</span>
                  <span className="order-date">{new Date(order.createdAt).toLocaleDateString('en-IN')}</span>
                </div>
                <span className="order-status" style={{ color: statusColors[order.status] }}>
                  {order.status}
                </span>
              </div>
              <div className="order-items">
                {order.orderItems?.map(item => (
                  <div key={item.id} className="order-item">
                    <span>{item.product?.name}</span>
                    <span>x{item.quantity}</span>
                    <span>₹{item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="order-total">Total: ₹{order.totalAmount.toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
