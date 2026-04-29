# 🛒 E-Commerce Platform

A full-stack e-commerce web application built with **Spring Boot** and **React.js**, featuring product listing, cart management, order tracking, and secure JWT-based authentication.

> **Duration:** Aug 2024 – Nov 2024

---

## 🚀 Features

- 🔐 Secure user authentication & authorization using **JWT + Spring Security**
- 🛍️ Product listing with **paginated search** and **category-based filtering**
- 🛒 Shopping cart management (add, update, remove items)
- 📦 Order placement and real-time order tracking
- 💳 Payment integration with order history
- 🗃️ Normalized MySQL database schema (users, products, orders, payments)
- 🔗 RESTful APIs for seamless frontend-backend communication

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Spring Boot 3, Spring Security |
| Frontend | React.js 18, React Router, Axios |
| Database | MySQL 8 |
| Authentication | JWT (JSON Web Tokens) |
| Build Tools | Maven, npm |
| API | REST |

---

## 📁 Project Structure

```
ecommerce-platform/
├── backend/                  # Spring Boot application
│   └── src/main/java/com/ecommerce/
│       ├── controller/       # REST API controllers
│       ├── service/          # Business logic
│       ├── repository/       # JPA repositories
│       ├── model/            # Entity classes
│       ├── security/         # JWT & Spring Security config
│       ├── dto/              # Data Transfer Objects
│       └── config/           # App configuration
├── frontend/                 # React.js application
│   └── src/
│       ├── components/       # Reusable UI components
│       ├── pages/            # Page components
│       ├── context/          # React Context (Auth, Cart)
│       ├── services/         # API service calls
│       └── utils/            # Helper functions
├── database/                 # SQL schema & seed data
├── docs/                     # API docs & ER diagram
└── docker-compose.yml
```

---

## ⚙️ Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8+
- Maven 3.8+

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform
```

### 2. Setup Database
```bash
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed_data.sql
```

### 3. Configure Backend
Edit `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=your_mysql_user
spring.datasource.password=your_mysql_password
jwt.secret=your_jwt_secret_key
```

### 4. Run Backend
```bash
cd backend
mvn spring-boot:run
```
Backend runs at: `http://localhost:8080`

### 5. Run Frontend
```bash
cd frontend
npm install
npm start
```
Frontend runs at: `http://localhost:3000`

### 6. Docker (Optional)
```bash
docker-compose up --build
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & get JWT token |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (paginated) |
| GET | `/api/products/{id}` | Get product by ID |
| GET | `/api/products/search?q=&category=` | Search & filter products |
| POST | `/api/products` | Add product (Admin) |
| PUT | `/api/products/{id}` | Update product (Admin) |
| DELETE | `/api/products/{id}` | Delete product (Admin) |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get user's cart |
| POST | `/api/cart/add` | Add item to cart |
| PUT | `/api/cart/update/{itemId}` | Update cart item quantity |
| DELETE | `/api/cart/remove/{itemId}` | Remove item from cart |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place order |
| GET | `/api/orders` | Get user's orders |
| GET | `/api/orders/{id}` | Get order details |

---

## 🗄️ Database Schema

```
users          → id, name, email, password, role, created_at
products       → id, name, description, price, stock, category_id, image_url
categories     → id, name
cart           → id, user_id, created_at
cart_items     → id, cart_id, product_id, quantity
orders         → id, user_id, total_amount, status, created_at
order_items    → id, order_id, product_id, quantity, price
payments       → id, order_id, payment_method, status, transaction_id
```

---

## 📸 Screenshots

> _Add screenshots here after setup_

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)
