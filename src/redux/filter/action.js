import { FILTERBOOK } from "./actionType";

export const searchedBook = (searchKey) => {
  return {
    type: FILTERBOOK,
    payload: searchKey,
  };
};
