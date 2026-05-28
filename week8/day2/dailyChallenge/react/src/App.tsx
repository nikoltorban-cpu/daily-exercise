import { useState } from "react";

import List from "./components/List";
import type { Book } from "./types/Book";

function App() {

  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
    },
  ]);

  const addBook = (): void => {

    const newBook: Book = {
      id: books.length + 1,
      title: `New Book ${books.length + 1}`,
      author: `Author ${books.length + 1}`,
    };

    setBooks((prevBooks) => [
      ...prevBooks,
      newBook,
    ]);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >

      <h1>📚 Book List</h1>

      <button onClick={addBook}>
        Add Book
      </button>

      <List
        items={books}
        renderItem={(book) => (
          <div
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{book.title}</h3>

            <p>
              Author: {book.author}
            </p>

            <small>
              ID: {book.id}
            </small>
          </div>
        )}
      />

    </div>
  );
}

export default App;