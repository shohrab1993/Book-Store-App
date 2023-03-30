import { ADDBOOK, DELETEBOOK, EDITBOOK, LOADEDBOOK } from "./actionType";

export const loadedBook = (bookItem) => {
  return {
    type: LOADEDBOOK,
    payload: bookItem,
  };
};

export const addBook = (book) => {
  return {
    type: ADDBOOK,
    payload: book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: bookId,
  };
};

export const updateBook = (updateBook, id) => {
  return {
    type: EDITBOOK,
    payload: {
      updateBook,
      id,
    },
  };
};
