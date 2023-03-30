import { deleteBook } from "../book/action";

const deleteBookThunk = (bookId) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:9000/books/${bookId}`, {
        method: "DELETE",
      });

      dispatch(deleteBook(bookId));
    } catch (error) {
      console.log(error);
    }
  };
};
export default deleteBookThunk;
