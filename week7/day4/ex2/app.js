const express = require('express');

const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'J.K Rowling',
    publishedYear: 1997
  },
  {
    id: 2,
    title: 'The Hobbit',
    author: 'Tolkien',
    publishedYear: 1937
  }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const id = parseInt(req.params.bookId);

  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});