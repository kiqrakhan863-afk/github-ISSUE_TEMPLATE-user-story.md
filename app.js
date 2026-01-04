import express from "express";
import { getDb } from "./models/db.js"; // MongoDB connection
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example /api/search route
app.get("/api/search", async (req, res) => {
  try {
    const { query } = req.query; // e.g., /api/search?query=gift
    const db = getDb();
    const collection = db.collection("gifts");

    // Simple search example
    const results = await collection
      .find({ name: { $regex: query, $options: "i" } })
      .toArray();

    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});