// /app.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./models/db.js";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/search", searchRoutes);

// Example root route
app.get("/", (req, res) => {
  res.send("Giftlink Backend is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});