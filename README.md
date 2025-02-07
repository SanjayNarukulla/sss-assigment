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

### Frontend (React.js)
The following NPM packages are installed in the frontend:

| Package | Purpose |
|---------|----------|
| react | Core React library |
| react-dom | DOM bindings for React |
| react-router-dom | Frontend routing |
| axios | HTTP client for API requests|

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
DB_PASS=yourpassword
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
git clone https://github.com/SanjayNarukulla/sss-assignment.git
cd sss-assignment
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

The frontend will run at http://localhost:3001/ 

### Access the Application:
- Open http://localhost:3001/ in your browser
- Ensure the backend is running on http://localhost:3000/ for API calls

## 📌 API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/items | Fetch all items |
| GET | /api/items/:id | Fetch item by ID |
| POST | /api/items | Create a new item |
| PUT | /api/items/:id | Update item details |
| DELETE | /api/items/:id | Delete an item |

## 📌 Database Schema (MySQL)

### Items Table

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key) | Unique Item ID |
| name | VARCHAR(255) | Item's full name |
| description | VARCHAR(255) | description |
| created_at | TIMESTAMP | Item Creation Date |



🔗 Loom Video Link: [(https://www.loom.com/share/ee54790da26641aca4e878e7546b04e4?sid=41bb8cac-5a18-4eae-896c-ec9b06c130f4)]



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


## 📌 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## 📌 Contact
For any questions or issues, reach out to:
narukullasanjy@gmail.com
