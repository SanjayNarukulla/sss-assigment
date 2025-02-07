import React from "react";
import { useNavigate } from "react-router-dom";
import ItemsList from "../ItemsList/ItemsList";
import ItemForm from "../ItemForm/ItemForm";
import "./Dashboard.css"

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <ItemForm />
      <ItemsList />
    </div>
  );
};

export default Dashboard;
