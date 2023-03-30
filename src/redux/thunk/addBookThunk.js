import { addBook } from "../book/action";

const addingBook = (book) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:9000/books", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: await JSON.stringify({
          name: book.name,
          author: book.author,
          thumbnail: book.thumbnail,
          price: book.price,
          rating: book.rating,
          featured: book.featured,
        }),
      });
      const books = await res.json();
      dispatch(addBook(books));
    } catch (error) {
      console.log(error);
    }
  };
};
export default addingBook;
