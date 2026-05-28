import { useState } from "react";

import { useSelector } from "react-redux";

import {
  selectBooks,
  selectFantasyBooks,
  selectHorrorBooks,
  selectScienceFictionBooks,
} from "../selectors/bookSelectors";

function BookList() {
  const [genre, setGenre] = useState("All");

  const allBooks = useSelector(selectBooks);

  const fantasyBooks = useSelector(selectFantasyBooks);

  const horrorBooks = useSelector(selectHorrorBooks);

  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  let displayedBooks = allBooks;

  if (genre === "Fantasy") {
    displayedBooks = fantasyBooks;
  }

  if (genre === "Horror") {
    displayedBooks = horrorBooks;
  }

  if (genre === "Science Fiction") {
    displayedBooks = scienceFictionBooks;
  }

  return (
    <div>
      <h1>📚 Book Inventory</h1>

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <button onClick={() => setGenre("All")}>All</button>

        <button
          onClick={() => setGenre("Fantasy")}
          style={{
            marginLeft: "10px",
          }}
        >
          Fantasy
        </button>

        <button
          onClick={() => setGenre("Horror")}
          style={{
            marginLeft: "10px",
          }}
        >
          Horror
        </button>

        <button
          onClick={() => setGenre("Science Fiction")}
          style={{
            marginLeft: "10px",
          }}
        >
          Science Fiction
        </button>
      </div>

      {displayedBooks.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{book.title}</h3>

          <p>✍️ {book.author}</p>

          <p>📖 {book.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
