import { FILTERBOOK } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERBOOK:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
