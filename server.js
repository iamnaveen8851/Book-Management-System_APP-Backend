// import the express module
const express  = require("express")
// Import the userRouter to handle user-related routes
const userRouter = require("./routes/userRouter")
const bookRouter = require("./routes/bookRouter")
// import dot env to get the access of environment variables which are stored in the .env file 
require("dotenv").config()



// create a server first with the help of the express
const app = express()

// Middleware to parse incoming JSON requests
app.use(express.json())

// Use the userRouter for routes starting with "/user"
app.use("/user", userRouter)
app.use("/books", bookRouter)

// store the port number by importing from .env file or use the port number In case if you get any error 
const PORT = process.env.PORT || 8080


// import the connectDb from db.js file to connect the database with your server
const connectDb = require("./config/db")


// create your first route to check that your server is running or not 
app.get("/", async(req, res)=> {
    res.send("Welcome to Book Mangament Server!")
})



// to run the server we need to use app.listen and provide the required port and connectDb to run the server and connect the database with server 
app.listen(PORT, async(req, res)=> {
   try {
    await connectDb
    console.log(`Server is listening on ${PORT} and db is connected`);
   } catch (error) {
    console.log(error.message);
   }
})



