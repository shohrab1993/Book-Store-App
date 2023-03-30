import { updateBook } from "../book/action";

const bookUpdated = (updatedBook, id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:9000/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: await JSON.stringify({
          name: updatedBook.name,
          author: updatedBook.author,
          thumbnail: updatedBook.thumbnail,
          price: updatedBook.price,
          rating: updatedBook.rating,
          featured: updatedBook.featured,
        }),
      });
      const books = await res.json();
      dispatch(updateBook(books, books.id));
    } catch (error) {
      console.log(error);
    }
  };
};
export default bookUpdated;
