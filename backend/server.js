const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // ✅ Import CORS
const db = require("./config/db");
const limiter = require("./middleware/rateLimit");
const itemsRoutes = require("./routes/items");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();
const port = 3000;

// ✅ Enable CORS Middleware
app.use(
  cors({
    origin: "http://localhost:3001", // Allow frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow cookies & authentication headers
  })
);

// Middleware
app.use(express.json());
app.use(limiter);

// Routes
app.use("/api/items", itemsRoutes);
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong");
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
