import { FETCH_QUOTES } from '../actions';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  [FETCH_QUOTES]: (state = [], action) => action.payload || state
});

export default rootReducer;
