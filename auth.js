import express from "express";
import { getDb } from "../models/db.js"; // your MongoDB connection

const router = express.Router();

// Example login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = getDb();
    const collection = db.collection("users");

    // Find the current user in the database
    const user = await collection.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Here you would check password, generate token, etc.
    res.status(200).json({ message: "User found", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;