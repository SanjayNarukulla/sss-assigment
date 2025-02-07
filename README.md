Full Stack Project
Project Overview
This is a full-stack web application built using React.js for the frontend and Express.js for the backend. The backend interacts with a MySQL database and follows RESTful API principles.
This repository contains both frontend and backend code. You can choose to run them separately or together.
📌 Installed Packages
Backend (Node.js + Express)
The following NPM packages are installed in the backend:
PackagePurposeexpressWeb framework for Node.jsmysql2MySQL database connectiondotenvLoad environment variablescorsEnable Cross-Origin Resource SharingbcryptjsPassword hashingjsonwebtokenJWT authenticationnodemonAuto-restart server on changes (for development)body-parserParse incoming request bodies
Install all backend dependencies with:
shCopynpm install
Frontend (React.js + Vite)
The following NPM packages are installed in the frontend:
PackagePurposereactCore React libraryreact-domDOM bindings for Reactreact-router-domFrontend routingaxiosHTTP client for API requeststailwindcssCSS framework for stylingreact-toastifyNotifications and alerts@vitejs/plugin-reactVite plugin for React
Install all frontend dependencies with:
shCopynpm install
📌 How to Use the Backend Separately
Prerequisites
Ensure you have the following installed:

Node.js (v18 or later)
npm (or yarn)
MySQL Database

Backend Setup

Navigate to the backend folder:

shCopycd backend

Install dependencies:

shCopynpm install

Configure environment variables:

Create a .env file inside the backend folder
Add your database credentials:



envCopyDB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
JWT_SECRET=your_secret_key

Run the backend server:

shCopynpm start
The backend will run at http://localhost:3000/.
📌 How to Run the Frontend & Backend Together
Prerequisites
Ensure you have installed:

Node.js (v18 or later)
npm (or yarn)
MySQL Database

Full Stack Setup

Clone the repository:

shCopygit clone https://github.com/your-username/fullstack-project.git
cd fullstack-project

Start the backend:

Follow the backend setup steps above


Navigate to the frontend folder:

shCopycd frontend

Install frontend dependencies:

shCopynpm install

Start the frontend server:

shCopynpm start
The frontend will run at http://localhost:5173/ (Vite default port).
Access the Application:

Open http://localhost:5173/ in your browser
Ensure the backend is running on http://localhost:3000/ for API calls

📌 API Endpoints (Backend)
MethodEndpointDescriptionGET/api/usersFetch all usersGET/api/users/:idFetch user by IDPOST/api/usersCreate a new userPUT/api/users/:idUpdate user detailsDELETE/api/users/:idDelete a user
📌 Database Schema (MySQL)
Users Table
ColumnTypeDescriptionidINT (Primary Key)Unique User IDnameVARCHAR(255)User's full nameemailVARCHAR(255)Unique EmailpasswordVARCHAR(255)Hashed Passwordcreated_atTIMESTAMPUser Creation Date
📌 Loom Video Demonstration
A Loom video will demonstrate:

API input and response handling
Argument parsing and error handling
Authentication with valid/invalid credentials
API requests and response validation

🔗 Loom Video Link: [To be added]
📌 Deployment Instructions
Backend Deployment (Render)
The backend can be deployed using Render:

Create a Render account at https://render.com
Create a new Web Service and connect your GitHub repository
Set environment variables (as per .env)
Deploy the backend

Frontend Deployment (Netlify/Vercel)

Create a Netlify/Vercel account
Connect your GitHub repository
Set the frontend build command:

shCopynpm run build

Deploy the frontend

📌 Final Report
Approach

Built a RESTful API using Express.js
Used React.js for a dynamic frontend UI
Implemented JWT authentication for secure user access
Designed MySQL schema for efficient data storage

Challenges & Solutions
Authentication Security

Challenge: Secure password storage
Solution: Used bcrypt for password hashing and JWT for authentication

Error Handling

Challenge: Managing different API errors
Solution: Implemented centralized error-handling middleware

Frontend-Backend Communication

Challenge: Handling CORS issues
Solution: Enabled CORS middleware in the backend

📌 Contributing
If you want to contribute:

Fork the repository
Create a feature branch:

shCopygit checkout -b feature-name

Commit your changes:

shCopygit commit -m "Added new feature"

Push to GitHub:

shCopygit push origin feature-name

Create a pull request

📌 License
This project is licensed under the MIT License.
Feel free to use and modify it as needed.
📌 Contact
For any questions or issues, reach out to:
