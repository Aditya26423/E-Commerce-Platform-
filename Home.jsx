import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <section className="hero">
        <h1>Shop Everything You Need</h1>
        <p>Discover thousands of products across electronics, fashion, books, and more. Fast delivery, secure payments.</p>
        <button className="hero-btn" onClick={() => navigate('/products')}>Browse Products →</button>
      </section>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports & Fitness'].map(cat => (
            <div key={cat} className="category-card" onClick={() => navigate('/products')}>
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
