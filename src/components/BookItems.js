import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gettingData from "../redux/thunk/fetchData";
import BookCard from "./BookCard";

const BookItems = ({ isFeatured }) => {
  const book = useSelector((state) => state.book);
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingData(search));
  }, [dispatch, search]);

  return (
    <>
      {book
        ?.filter((book) => (isFeatured ? book.featured : book))

        .map((item) => {
          return <BookCard key={item.id} item={item} />;
        })}
    </>
  );
};

export default BookItems;
