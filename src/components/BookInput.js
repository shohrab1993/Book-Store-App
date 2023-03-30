import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookForEdit } from "../redux/editBook/action";
import addingBook from "../redux/thunk/addBookThunk";
import bookUpdated from "../redux/thunk/updateBookThunk";
import Input from "./Input";

const BookInput = () => {
  const { book, isUpdate } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const [featured, setFeatured] = useState(false);

  const books = {
    name: bookName,
    author: author,
    thumbnail: thumbnail,
    price: price,
    rating: rating,
    featured: featured,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isUpdate ? bookUpdated(books, book.id) : addingBook(books));
    dispatch(getBookForEdit("", false));
    setBookName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };
  useEffect(() => {
    setBookName(isUpdate ? book.name : "");
    setAuthor(isUpdate ? book.author : "");
    setThumbnail(isUpdate ? book.thumbnail : "");
    setPrice(isUpdate ? book.price : "");
    setRating(isUpdate ? book.rating : "");
    setFeatured(isUpdate ? book.featured : false);
  }, [isUpdate, book]);

  return (
    <>
      <div>
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">
            {" "}
            {isUpdate ? "Update Book" : "Add New Book"}
          </h4>
          <form className="book-form" onSubmit={handleSubmit}>
            <Input
              label="Book Name"
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />

            <Input
              label="Author"
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <Input
              label="Image Url"
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />

            <div className="grid grid-cols-2 gap-8 pb-4">
              <Input
                label="Price"
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <Input
                label="Rating"
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="3"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <input
                id="input-Bookfeatured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
                value={featured}
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <label htmlFor="featured" className="ml-2 text-sm">
                This is a featured book
              </label>
            </div>

            <button
              type="submit"
              className={`${isUpdate ? "update-btn" : "submit"}`}
              id="submit"
            >
              {isUpdate ? "Update Book" : "Add Book"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookInput;
