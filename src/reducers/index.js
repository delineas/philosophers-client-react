import { FETCH_QUOTES } from '../actions';
import { combineReducers } from "redux";

const quotes = (state = [], action = {}) => {
  console.log(action);
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        quotes: action.quotes,
        links: action.links
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  //[FETCH_QUOTES]: (state = [], action) => action.payload || state
  quotes
});

export default rootReducer;
