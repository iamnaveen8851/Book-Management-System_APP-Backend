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

### Stage 8. create authorization system for authorized person to perform CRUD on their own books
    ### PROBLEM 
        - understand why do we need authorization check[x]
        - update the schema of books  check[x]
        - update the login router and send userId and username as payload in token
        - update in middleware and we'll log and see the payload once it gets decoded check[x]

    ### SOLUTION how we can build the authorization
        - we'll send the user details in the form of payload as token 
        - we'll decode the token in the middleware and attach with req.body
        - we'll create the books with userDetails check[x]

        - one to many relationship 
            - user a ===> multiple books 
            
        - we'll add authorization part-3 to so only authorized person can access their books
        

### Stage 9. Create Role Based Access Control
        - update the user Schema -> check[x]
        - update book Schema  -> check[x]
        - update Router following:
            a. users - > Sign-up and login 
            b. books 
        - middlewares dir
           a. access.js --> it will take role as argument and verify the role to perform CRUD operations    
        - Test API with RBAC 
          - creator - > Create book, update book, delete book
        NOTE : `Add auth middleware before access middleware to perfom CRUD`
          - can the multiple roles get access to read the books ?
## packages

- express
- nodemon
- mongoose
- dotenv
- jwt
- bcrypt
