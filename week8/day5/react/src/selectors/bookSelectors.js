import { createSelector } from "@reduxjs/toolkit";

export const selectBooks = (state) =>
  state.books.books;

export const selectFantasyBooks =
  createSelector(
    [selectBooks],

    (books) =>
      books.filter(
        (book) =>
          book.genre === "Fantasy"
      )
  );

export const selectHorrorBooks =
  createSelector(
    [selectBooks],

    (books) =>
      books.filter(
        (book) =>
          book.genre === "Horror"
      )
  );

export const selectScienceFictionBooks =
  createSelector(
    [selectBooks],

    (books) =>
      books.filter(
        (book) =>
          book.genre ===
          "Science Fiction"
      )
  );