// /routes/authRoutes.js
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db("giftlink");
const usersCollection = db.collection("users");

// Login route example
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the current user in the database
    const user = await usersCollection.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Example password check (in real projects, hash passwords!)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;