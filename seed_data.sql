USE ecommerce_db;

-- Seed categories
INSERT INTO categories (name) VALUES
('Electronics'),
('Clothing'),
('Books'),
('Home & Kitchen'),
('Sports & Fitness');

-- Seed products
INSERT INTO products (name, description, price, stock, category_id, image_url) VALUES
('Wireless Headphones', 'Premium noise-cancelling wireless headphones with 30hr battery', 2999.00, 50, 1, 'https://via.placeholder.com/300'),
('Smartphone Stand', 'Adjustable aluminum desk stand for phones and tablets', 799.00, 100, 1, 'https://via.placeholder.com/300'),
('Mechanical Keyboard', 'Compact TKL mechanical keyboard with RGB backlight', 4499.00, 30, 1, 'https://via.placeholder.com/300'),
('Cotton T-Shirt', 'Premium 100% cotton crew-neck t-shirt', 499.00, 200, 2, 'https://via.placeholder.com/300'),
('Running Shoes', 'Lightweight breathable running shoes for daily training', 2499.00, 75, 5, 'https://via.placeholder.com/300'),
('Clean Code (Book)', 'A handbook of agile software craftsmanship by Robert C. Martin', 699.00, 40, 3, 'https://via.placeholder.com/300'),
('Stainless Steel Bottle', '1L insulated water bottle keeps drinks cold 24hr', 899.00, 120, 4, 'https://via.placeholder.com/300'),
('Yoga Mat', '6mm thick non-slip yoga and exercise mat', 1299.00, 60, 5, 'https://via.placeholder.com/300');

-- Seed admin user (password: admin123 — bcrypt hash)
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@ecommerce.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'ADMIN');
