// import the mongoose module 
const mongoose = require('mongoose')

// import userSchema from userSchema.js
const userSchema = require("./userSchema")


// to create a collection/dir in the database and store the user's data in that colleciton we'll create user's model and add collection name and schema 
const userModel = mongoose.model("Users", userSchema )

module.exports = userModel