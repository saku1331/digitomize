const express = require('express');
const router = express.Router();
const contestController = require("../../controllers/contest/contestController");

const fs = require('fs');

// Load the JSON file with motivational messages
const messages = require('./messages.json');

// GET route for sending a random message
router.get("/random-message", (req, res) => {
  // Select a random message from the array
  const randomIndex = Math.floor(Math.random() * messages.messages.length);
  const randomMessage = messages.messages[randomIndex];
  
  // Send the random message as JSON
  res.json({ message: randomMessage });
});

// GET route for contests
router.get("/", contestController.handleContestRoute);

module.exports = router;
