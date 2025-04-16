# Natours API - Tour Booking Application

A full-featured Node.js backend API for managing a tour booking platform. Built with Express, MongoDB, and Mongoose, the app supports authentication, authorization, Stripe payments, server-rendered views using Pug, and robust security best practices.

---

## 🚀 Features

### 🧑‍💻 Authentication & Authorization

- JWT-based user login and signup
- Secure password hashing with bcrypt
- Role-based access control (admin, user, guide)
- Password reset flow with email verification
- Route protection middleware (`protect`, `restrictTo`)

### 🧭 Tour Management

- Create, read, update, and delete tours
- Filtering, sorting, pagination, and field limiting via query strings
- Geolocation support to find tours within a radius

### 📷 Media & File Uploads

- Upload user profile photos and tour images
- Image resizing with Sharp and Multer

### 💳 Booking & Payments

- Stripe Checkout session integration
- Webhook to confirm successful payments
- Booking records saved in MongoDB

### 📬 Email System

- Send welcome and password reset emails using Nodemailer + SendGrid

### 🛡️ Security

- HTTP headers with Helmet
- Rate limiting to protect against brute force attacks
- Data sanitization (NoSQL injection + XSS prevention)
- CORS support

### 🌐 Server-rendered Views

- Pug template engine
- Dynamic pages for login, signup, tours, and account management
- Navbar UI changes based on user authentication status

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Pug**
- **Stripe API**
- **Nodemailer + SendGrid**

---

## 📁 Project Structure (MVC Pattern)

```
project-root/
├── controllers/         # Business logic (auth, tours, bookings)
├── models/              # Mongoose schemas and methods
├── routes/              # Express route handlers
├── views/               # Pug templates for frontend pages
├── public/              # Static files (CSS, images, JS)
├── utils/               # Helper functions (email, error handling)
├── app.js               # Express app setup
├── server.js            # App entry point
```

---

## 🧠 What I Learned

- Implementing secure authentication with JWT & cookies
- Building role-based access control middleware
- Setting up and verifying Stripe payments and webhooks
- Building a modular, scalable Node.js backend using MVC
- Managing image uploads and resizing
- Enforcing security best practices (XSS, NoSQL injection, rate limiting)

---
