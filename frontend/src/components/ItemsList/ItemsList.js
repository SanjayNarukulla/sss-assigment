import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemsList.css";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:3000/api/items", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(res.data);
    } catch (error) {
      setMessage("Failed to fetch items");
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:3000/api/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Item deleted successfully!");
      fetchItems();
    } catch (error) {
      setMessage("Failed to delete item");
    }
  };

  const handleEditClick = (item) => {
    setEditItemId(item.id);
    setEditName(item.name);
    setEditDescription(item.description);
  };

  const handleEditSubmit = async (id) => {
    if (!editName || !editDescription) {
      setMessage("Name and description cannot be empty.");
      return;
    }

    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:3000/api/items/${id}`,
        { name: editName, description: editDescription },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Item updated successfully!");
      setEditItemId(null);
      fetchItems();
    } catch (error) {
      setMessage("Failed to update item");
    }
  };

  return (
    <div className="items-container">
      {message && <p className="message">{message}</p>}
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            {editItemId === item.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Enter new name"
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Enter new description"
                />
                <button
                  className="save-btn"
                  onClick={() => handleEditSubmit(item.id)}
                >
                  Save
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setEditItemId(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span className="item-text">
                  {item.name}: {item.description}
                </span>
                <button
                  className="edit-btn"
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
