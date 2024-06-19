// Importing required modules: express for creating routes, userModel for interacting with the user model,
// and bcrypt for hashing passwords securely.
const express = require("express");
const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");

// Creating an instance of an Express router to handle routes related to users.
const userRouter = express.Router();

// Handling POST requests to '/signUp' endpoint for user registration.
userRouter.post("/signUp", async (req, res) => {
  // Destructuring username, email, and password from the request body.
  const { username, email, password } = req.body;

  try {
    // Hashing the password asynchronously with bcrypt
    bcrypt.hash(password, 10, async (err, hash) => {
      // If there's an error during hashing, send a 403 error response
      if (err) {
        return res.status(403).json({ message: err.message });
      }
      // Create a new user in the database with the hashed password
      const newUSer = userModel.create({ username, email, password: hash });
      // Send a success response with a message and the new user's data
      res.status(201).json({ message: "user registered successfully" });
    });
  } catch (error) {
     // If there's any other error, send a 500 error response
    res.status(500).json({ message: error.message });
  }
});


// Exporting the userRouter to be used in other parts of the application
module.exports = userRouter;
