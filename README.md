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

### Stage 3. userRouter for the registration and login & Test the api using POSTMAN

    - routes dir
        - userRouter.js
           a. registration route
           b. login route

### Stage 4. auth system for the user with the help of json-web-token/ jwt

        - we'll assign token to the each user once the user logged in and send the token as to id card

### Stage 5. Create Books-schema and Books-Model to create the books in the database

        - bookSchema.js
        - bookModel.js

### Stage 6. Books Router to create books and read books

        - bookRouter.js --> perform CRUD operations 
            a. POST Router to create a book
            b. GET Router to read books 
            c. Patch/update a book
            d. Delete a book
             
### Stage 7. create auth system for authenication and verify token 
        - middleware dir 
            a. authMiddleware.js 
## packages

- express
- nodemon
- mongoose
- dotenv
- jwt
- bcrypt
