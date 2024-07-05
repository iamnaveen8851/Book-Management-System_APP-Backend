const { Router } = require("express");
const bookModels = require("../models/bookModels");
const auth = require("../middlewares/authMiddleware");
const accessMiddleware = require("../middlewares/accessMiddleware");

const bookRouter = Router();

// to read the books
// we're using the auth middleware here for authentication
bookRouter.get("/", auth, async (req, res) => {
  try {
    const username = req.body.username;
    const userId = req.body.userId;
    const books = await bookModels.find({ userId });
    res
      .status(200)
      .json({ message: `All books are found of ${username}`, books });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// to create a new book
bookRouter.post("/create", auth, accessMiddleware(["creator"]), async (req, res) => {
  try {
    const username = req.body.username;
    const newBook = await bookModels.create(req.body);
    res
      .status(201)
      .json({ message: `A new book has been created ${username}`, newBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update route to update a book
bookRouter.patch("/update/:id", auth, async (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;
  const username = req.body.username;
  try {
    const updateBook = await bookModels.findOneAndUpdate(
      { _id: id, userId },
      req.body
    );
    if (!updateBook) {
      return res.status(404).json({
        message: `You are not authorized to update this book ${username}`,
      });
    }
    res.status(200).json({
      message: `A book updated successfully by the Author ${username}`,
      data: updateBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete route to delete a book
bookRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;
  const username = req.body.username;
  try {
    const deleteBook = await bookModels.findOneAndDelete({ _id: id, userId });
    if (!deleteBook) {
      return res.status(404).json({
        message: `You are not authorized to delete this book ${username}`,
      });
    }
    res.status(200).json({
      message: `A book deleted successfully with id ${id}`,
      data: deleteBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = bookRouter;
