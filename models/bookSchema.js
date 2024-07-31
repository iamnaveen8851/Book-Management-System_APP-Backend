const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  image : {type: String, require : true},
  title: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  rating: { type: Number, require: true },
  price: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now() },
  userId: { type: String },
  username: { type: String },
  role: { type: String, require: true },
  author: { type: String, require: true },
});

module.exports = bookSchema;
