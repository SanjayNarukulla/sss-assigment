const db = require("../config/db");
const fs = require("fs").promises;

// Create Item
exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  const query = "INSERT INTO items (name, description) VALUES (?, ?)";
  db.query(query, [name, description], async (err, result) => {
    if (err) return res.status(500).send("Error inserting item");

    try {
      const metadata = {
        timestamp: new Date(),
        action: "Item Created",
        id: result.insertId,
      };
      await fs.writeFile("logs.json", JSON.stringify(metadata, null, 2), {
        flag: "a",
      });
      res.status(201).send("Item created successfully");
    } catch (fileErr) {
      res.status(500).send("Error logging item creation");
    }
  });
};

// Get All Items
exports.getAllItems = (req, res) => {
  db.query("SELECT * FROM items", (err, result) => {
    if (err) return res.status(500).send("Error fetching items");
    res.json(result);
  });
};

// Get Item by ID
exports.getItemById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM items WHERE id = ?", [id], (err, result) => {
    if (err || result.length === 0)
      return res.status(404).send("Item not found");
    res.json(result[0]);
  });
};

// Update Item
exports.updateItem = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const query = "UPDATE items SET name = ?, description = ? WHERE id = ?";
  db.query(query, [name, description, id], (err, result) => {
    if (err || result.affectedRows === 0)
      return res.status(404).send("Item not found or update failed");
    res.send("Item updated successfully");
  });
};

// Delete Item
exports.deleteItem = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM items WHERE id = ?", [id], (err, result) => {
    if (err || result.affectedRows === 0)
      return res.status(404).send("Item not found or delete failed");
    res.send("Item deleted successfully");
  });
};
