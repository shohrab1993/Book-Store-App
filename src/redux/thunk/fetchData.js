import { loadedBook } from "../book/action";

const gettingData = (search) => {
  return async (dispatch) => {
    let queryStr = "";
    if (search !== "") {
      queryStr += `?q=${search}`;
    }
    try {
      const res = await fetch(`http://localhost:9000/books${queryStr}`);
      const data = await res.json();
      dispatch(loadedBook(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export default gettingData;
