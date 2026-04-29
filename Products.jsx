import React, { useState, useEffect } from 'react';
import { productService } from '../../services/productService';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' },
    { id: 4, name: 'Home & Kitchen' },
    { id: 5, name: 'Sports & Fitness' },
  ];

  useEffect(() => {
    fetchProducts();
  }, [page, categoryId]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = { page, size: 12 };
      if (search) params.search = search;
      if (categoryId) params.categoryId = categoryId;
      const data = await productService.getProducts(params);
      setProducts(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(0);
    fetchProducts();
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products</h1>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="products-layout">
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li className={!categoryId ? 'active' : ''} onClick={() => setCategoryId('')}>All</li>
            {categories.map(cat => (
              <li
                key={cat.id}
                className={categoryId == cat.id ? 'active' : ''}
                onClick={() => setCategoryId(cat.id)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="products-grid-container">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              <div className="products-grid">
                {products.map(product => (
                  <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} />
                    <div className="product-info">
                      <p className="product-category">{product.category?.name}</p>
                      <h3>{product.name}</h3>
                      <p className="product-desc">{product.description?.slice(0, 60)}...</p>
                      <div className="product-footer">
                        <span className="price">₹{product.price.toLocaleString()}</span>
                        <button className="add-to-cart">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>← Prev</button>
                <span>Page {page + 1} of {totalPages}</span>
                <button disabled={page + 1 >= totalPages} onClick={() => setPage(p => p + 1)}>Next →</button>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
