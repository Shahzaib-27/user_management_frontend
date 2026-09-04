# User Management System

A simple and responsive **User Management System** built with **HTML, CSS, JavaScript, and Express.js**.

The project implements basic user management functionality including creating, viewing, updating, deleting, restoring users, input validation, unique email checking, and basic authentication.

## 🚀 Live Demo

**Frontend:**
https://user-management-frontend-ruby.vercel.app/

---

## 📌 Features

* Create new users
* Get all users
* Get a single user by ID
* Update one or more user fields
* Soft delete users
* Restore deleted users
* Validate user input before storing
* Unique email constraint
* Basic username/password authentication
* Sequential user IDs (`1`, `2`, `3`, ...)
* Store user data in a separate JSON database file
* Responsive and simple user interface

---

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* JSON file
* In-memory user management

### Authentication

* Basic Authentication
* Username and password verification
* Bcrypt or password hashing

---

## 📁 Project Structure

```text
user-management/
│
├── backend/
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── models/
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── db/
│   │   └── database.json
│   │
│   ├── app.js
│   ├── package.json
│   └── server.js
│
├── frontend/
│   │
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## ✅ User Validation

Before a user is stored, the server validates:

* Username
* Password
* Email
* Contact
* Address

The server checks that:

* Required fields are provided
* Username is valid
* Password is provided
* Email has a valid format
* Contact contains valid information
* Address is provided

Invalid data is rejected before it is stored.

---

Another user cannot register using the same email.

The server returns an error instead of creating a duplicate user.

---


## 🔐 Basic Authentication

Protected routes use simple Basic Authentication.

The application verifies:

```text
Username
Password
```

No bcrypt or password hashing is used because this project is designed as a simple learning project.

Example:

```text
Username: admin
Password: 123456
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Go to the backend folder

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

The project only requires Express.js for the backend.

### 4. Start the server

```bash
node server.js
```

The backend will run on:

```text
http://localhost:3000
```

---

## 💻 Frontend

Open the frontend in your browser or serve it through the backend's public folder, depending on your project setup.

The frontend communicates with the Express.js API to:

* Add users
* Display users
* Edit users
* Delete users
* Restore users
* Authenticate users

---

## 🎯 Project Objectives

This project was created to demonstrate how to build a simple user management system using fundamental web technologies.

The main objectives are:

1. Implement CRUD operations.
2. Store user data in a separate JSON file.
3. Validate user input before storing it.
4. Prevent duplicate email addresses.
5. Allow partial user updates.
6. Implement soft delete functionality.
7. Implement user restoration.
8. Protect routes using Basic Authentication.
9. Generate sequential user IDs.
10. Keep the project simple and easy to understand.

---

## 📚 Learning Concepts

This project demonstrates:

* REST APIs
* HTTP methods
* Express.js routing
* Controllers
* Models
* JSON file storage
* Input validation
* Authentication
* CRUD operations
* Partial updates
* Soft deletion
* RESToration
* Frontend API requests
* Client-server communication

---

## ⚠️ Disclaimer

This is an educational project designed to demonstrate basic CRUD operations and authentication.

Passwords are stored without hashing to keep the implementation simple. For a production application, passwords should **never** be stored as plain text; proper password hashing and a more secure authentication system should be used.
