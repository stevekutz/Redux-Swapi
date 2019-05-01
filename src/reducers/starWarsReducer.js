// import /* we need our action types here*/ "../actions";
/*
export const FETCH_CHARS = "FETCH_CHARS";
export const FETCH_GOOD = "FETCH_GOOD";
export const FETCH_FAIL = "FETCH_FAIL";
 */

import FETCH_CHARS from '../actions';
import FETCH_GOOD from '../actions';
import FETCH_FAIL from '../actions';

const initialState = {
  characters: [],
  error: "",
  isFetching: false,

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARS:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case FETCH_GOOD:
      return {
        ...state,
        error: "",
        isFetching: false,
        characters: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

