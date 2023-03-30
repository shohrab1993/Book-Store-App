import { GETEDITBOOK } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETEDITBOOK:
      const { book, updateTrueOrFalse } = action.payload;
      return {
        ...state,
        book,
        isUpdate: updateTrueOrFalse,
      };

    default:
      return state;
  }
};

export default reducer;
