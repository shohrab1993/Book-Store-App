import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";
import editBookReduce from "./editBook/editBookReducer";
import filterREducer from "./filter/filterReducer";

const rootReducer = combineReducers({
  book: bookReducer,
  edit: editBookReduce,
  filter: filterREducer,
});

export default rootReducer;
