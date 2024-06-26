const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  rating: { type: Number, require: true },
  price: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now() },
  userId: { type: String },
  username: { type: String },
});

module.exports = bookSchema;
