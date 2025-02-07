# Full Stack Project

## Project Overview
This is a full-stack web application built using React.js for the frontend and Express.js for the backend. The backend interacts with a MySQL database and follows RESTful API principles. This repository contains both frontend and backend code.

## 📌 Installed Packages

### Backend (Node.js + Express)
The following NPM packages are installed in the backend:

| Package | Purpose |
|---------|----------|
| express | Web framework for Node.js |
| mysql2 | MySQL database connection |
| dotenv | Load environment variables |
| cors | Enable Cross-Origin Resource Sharing |
| bcryptjs | Password hashing |
| jsonwebtoken | JWT authentication |
| nodemon | Auto-restart server on changes (for development) |
| body-parser | Parse incoming request bodies |

Install all backend dependencies with:
```sh
npm install
```

### Frontend (React.js + Vite)
The following NPM packages are installed in the frontend:

| Package | Purpose |
|---------|----------|
| react | Core React library |
| react-dom | DOM bindings for React |
| react-router-dom | Frontend routing |
| axios | HTTP client for API requests |
| tailwindcss | CSS framework for styling |
| react-toastify | Notifications and alerts |
| @vitejs/plugin-react | Vite plugin for React |

Install all frontend dependencies with:
```sh
npm install
```

## 📌 How to Use the Backend Separately

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or later)
- npm (or yarn)
- MySQL Database

### Backend Setup

1. Navigate to the backend folder:
```sh
cd backend
```

2. Install dependencies:
```sh
npm install
```

3. Configure environment variables:
   - Create a `.env` file inside the backend folder
   - Add your database credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
JWT_SECRET=your_secret_key
```

4. Run the backend server:
```sh
npm start
```

The backend will run at http://localhost:3000/.

## 📌 How to Run the Frontend & Backend Together

### Prerequisites
Ensure you have installed:
- Node.js (v18 or later)
- npm (or yarn)
- MySQL Database

### Full Stack Setup

1. Clone the repository:
```sh
git clone https://github.com/your-username/fullstack-project.git
cd fullstack-project
```

2. Start the backend:
   - Follow the backend setup steps above

3. Navigate to the frontend folder:
```sh
cd frontend
```

4. Install frontend dependencies:
```sh
npm install
```

5. Start the frontend server:
```sh
npm start
```

The frontend will run at http://localhost:5173/ (Vite default port).

### Access the Application:
- Open http://localhost:5173/ in your browser
- Ensure the backend is running on http://localhost:3000/ for API calls

## 📌 API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Fetch all users |
| GET | /api/users/:id | Fetch user by ID |
| POST | /api/users | Create a new user |
| PUT | /api/users/:id | Update user details |
| DELETE | /api/users/:id | Delete a user |

## 📌 Database Schema (MySQL)

### Users Table

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key) | Unique User ID |
| name | VARCHAR(255) | User's full name |
| email | VARCHAR(255) | Unique Email |
| password | VARCHAR(255) | Hashed Password |
| created_at | TIMESTAMP | User Creation Date |

## 📌 Loom Video Demonstration
A Loom video will demonstrate:
- API input and response handling
- Argument parsing and error handling
- Authentication with valid/invalid credentials
- API requests and response validation

🔗 Loom Video Link: [To be added]

## 📌 Deployment Instructions

### Backend Deployment (Render)
The backend can be deployed using Render:
1. Create a Render account at https://render.com
2. Create a new Web Service and connect your GitHub repository
3. Set environment variables (as per .env)
4. Deploy the backend

### Frontend Deployment (Netlify/Vercel)
1. Create a Netlify/Vercel account
2. Connect your GitHub repository
3. Set the frontend build command:
```sh
npm run build
```
4. Deploy the frontend

## 📌 Final Report

### Approach
- Built a RESTful API using Express.js
- Used React.js for a dynamic frontend UI
- Implemented JWT authentication for secure user access
- Designed MySQL schema for efficient data storage

### Challenges & Solutions

#### Authentication Security
- **Challenge**: Secure password storage
- **Solution**: Used bcrypt for password hashing and JWT for authentication

#### Error Handling
- **Challenge**: Managing different API errors
- **Solution**: Implemented centralized error-handling middleware

#### Frontend-Backend Communication
- **Challenge**: Handling CORS issues
- **Solution**: Enabled CORS middleware in the backend

## 📌 Contributing
If you want to contribute:

1. Fork the repository
2. Create a feature branch:
```sh
git checkout -b feature-name
```
3. Commit your changes:
```sh
git commit -m "Added new feature"
```
4. Push to GitHub:
```sh
git push origin feature-name
```
5. Create a pull request

## 📌 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## 📌 Contact
For any questions or issues, reach out to:
[Your contact information]
