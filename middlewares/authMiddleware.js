const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
//   we'll get the token from req.headers 
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  try {
    if (token) {
      jwt.verify(token, process.env.SECURITY_KEY, function (err, decoded) {
        console.log(decoded); // bar
        // we are attaching the decoded  payload with req.body
        req.body.userId = decoded.userId;
        req.body.username = decoded.username;
        req.body.role = decoded.role;
        // allow to go ahead and get the access of books in router
        next()
      });
    } else {
      res.status(401).json({ message: "Token is not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = auth

