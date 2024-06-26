const { Router } = require("express");
const bookModels = require("../models/bookModels");
const auth = require("../middlewares/authMiddleware");

const bookRouter = Router();

// to read the books 
// we're using the auth middleware here for authentication
bookRouter.get("/", auth ,async (req, res) => {
  try {
    const books = await bookModels.find();
    res.status(200).json({ message: "All books found", books });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// to create a new book
bookRouter.post("/create", auth, async (req, res) => {
  try {
    const newBook = await bookModels.create(req.body);
    res.status(201).json({ message: "A new book has been created", newBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update route to update a book
bookRouter.patch("/update/:id",auth ,async (req, res) => {
  const { id } = req.params;
  try {
    const updateBook = await bookModels.findByIdAndUpdate(id, req.body);

    res
      .status(200)
      .json({
        message: `A book updated successfully with id ${id}`,
        data: updateBook,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete route to delete a book
bookRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await bookModels.findByIdAndDelete(id);
    res
      .status(200)
      .json({
        message: `A book deleted successfully with id ${id}`,
        data: deleteBook,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = bookRouter;
