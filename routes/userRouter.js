// Importing required modules: express for creating routes, userModel for interacting with the user model,
// and bcrypt for hashing passwords securely.
const express = require("express");
const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

// userRouter for login
userRouter.post("/login", async (req, res) => {
  // Destructuring email, and password from the request body.
  const { email, password } = req.body;

  try {
    // we'll get the existing user data first
    const existingUser = await userModel.findOne({ email });
    // check if the user is already exist in the database
    if (existingUser) {
      // check the given password with store encrypted password
      bcrypt.compare(password, existingUser.password, function (err, result) {
        // result is true
        if (result) {
          // token to user
          const token = jwt.sign(
            { userId: existingUser._id, username: existingUser.username },
            process.env.SECURITY_KEY
          );
          // user is able to login and send the token to each user
          res
            .status(200)
            .json({ message: "user logged in successfully", token: token });
        } else {
          // in case of wrong password
          res.status(401).json({ message: "Wrong password" });
        }
      });
    } else {
      // if the user is not existed or email is wrong
      res
        .status(403)
        .json({ message: "User is not found,please register first" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Exporting the userRouter to be used in other parts of the application
module.exports = userRouter;
