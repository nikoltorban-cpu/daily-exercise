const express = require("express");

const router = express.Router();


// IN-MEMORY DATABASE

const books = [];


// GET ALL BOOKS

router.get("/", (req, res) => {

  res.json(books);

});


// CREATE BOOK

router.post("/", (req, res) => {

  const {

    title,
    author,
    publishedYear

  } = req.body;

  if (!title || !author) {

    return res.status(400).json({

      message:
        "Title and author are required"

    });

  }

  const newBook = {

    id: Date.now(),

    title,

    author,

    publishedYear

  };

  books.push(newBook);

  res.status(201).json(newBook);

});


// UPDATE BOOK

router.put("/:id", (req, res) => {

  const id =
    parseInt(req.params.id);

  const book = books.find(
    book => book.id === id
  );

  if (!book) {

    return res.status(404).json({

      message: "Book not found"

    });

  }

  const {

    title,
    author,
    publishedYear

  } = req.body;

  if (title !== undefined) {

    book.title = title;

  }

  if (author !== undefined) {

    book.author = author;

  }

  if (publishedYear !== undefined) {

    book.publishedYear =
      publishedYear;

  }

  res.json(book);

});


// DELETE BOOK

router.delete("/:id", (req, res) => {

  const id =
    parseInt(req.params.id);

  const bookIndex =
    books.findIndex(
      book => book.id === id
    );

  if (bookIndex === -1) {

    return res.status(404).json({

      message: "Book not found"

    });

  }

  books.splice(bookIndex, 1);

  res.json({

    message:
      "Book deleted successfully"

  });

});


module.exports = router;