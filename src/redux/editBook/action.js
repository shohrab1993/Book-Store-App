import { GETEDITBOOK } from "./actionType";

export const getBookForEdit = (book, updateTrueOrFalse) => {
  return {
    type: GETEDITBOOK,
    payload: {
      book,
      updateTrueOrFalse,
    },
  };
};
