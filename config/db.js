// import the mongoose module 
const mongoose = require("mongoose")
// import dot env to get the access of environment variables which are stored in the .env file 
require("dotenv").config()

// we need to use pass our URI inside the mongoogse.connect and store it inside the connectDb
const connectDb = mongoose.connect(process.env.MONGODB_URI)

// export the connectDb to use it anywhere
module.exports = connectDb