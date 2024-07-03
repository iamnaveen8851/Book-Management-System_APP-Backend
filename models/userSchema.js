// import the mongoose module 
const mongoose = require("mongoose")


// create a schema for to store userdata in a required format
const userSchema = mongoose.Schema({
    username : {type : String, required: true},
    email : {type : String, required: true, unique: true},
    password : {type : String, required: true},
    // role with enum
    role : {type : String, enum : ["creator", "student", "view-all"], default: "student"}
})



module.exports = userSchema