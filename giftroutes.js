// routes/giftRoutes.js
const express = require("express");
const router = express.Router();
const { client } = require("../models/db"); // database connection

// Example route
router.get("/gifts", async (req, res) => {
  await client.connect(); // connecting to MongoDB
  const gifts = await client.db("giftDB").collection("gifts").find({}).toArray();
  res.json(gifts);
});

module.exports = router;