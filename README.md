# Book-Management-System_APP-Backend

## Structure

### Stage 1. Basic setup of server

    - server.js file
    - config dir
        - db.js file to connect the database with our server
    - .env file for the environment variables

### Stage 2. userSchema and user model for the registration

    - userSchema.js 
    - userModel.js

### Stage 3 userRouter for the registration and login & Test the api using POSTMAN
    - routes dir
        - userRouter.js 
           a. registration route 
           b. login route
           
### Stage 4 auth system for the user with the help of json-web-token


## packages

- express
- nodemon
- mongoose
- dotenv
- jwt
- bcrypt
