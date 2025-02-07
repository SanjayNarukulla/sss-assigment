import React, { useState } from "react";
import axios from "axios";
import "./ItemForm.css";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:3000/api/items",
        { name, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Item added!");
      window.location.reload();
    } catch (error) {
      alert("Failed to add item");
    }
  };

  return (
    <div className="item-form-container">
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  );
};

export default ItemForm;
