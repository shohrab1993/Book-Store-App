import { ADDBOOK, DELETEBOOK, EDITBOOK, LOADEDBOOK } from "./actionType";
import initialState from "./initialState";

const generateID = (book) => {
  const unicId = book.reduce((acc, newId) => Math.max(newId.id, acc), -1);
  return unicId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADEDBOOK:
      return action.payload;

    case ADDBOOK:
      const book = action.payload;
      return [
        ...state,
        {
          id: generateID(state),
          name: book.name,
          author: book.author,
          thumbnail: book.thumbnail,
          price: book.price,
          rating: book.rating,
          featured: book.featured,
        },
      ];

    case DELETEBOOK:
      return state?.filter((book) => book.id !== action.payload);

    case EDITBOOK:
      const { updateBook, id } = action.payload;
      return state.map((book) => {
        if (book.id !== id) {
          return book;
        }
        return {
          ...book,
          name: updateBook.name,
          author: updateBook.author,
          thumbnail: updateBook.thumbnail,
          price: updateBook.price,
          rating: updateBook.rating,
          featured: updateBook.featured,
        };
      });

    default:
      return state;
  }
};

export default reducer;
