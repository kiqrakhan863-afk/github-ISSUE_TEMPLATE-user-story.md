// /models/db.js
const { MongoClient } = require('mongodb');

// Replace this with your actual MongoDB connection string
const uri = "YOUR_MONGODB_CONNECTION_STRING";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect(); // ✅ This is the required line
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectDB();

module.exports = client;