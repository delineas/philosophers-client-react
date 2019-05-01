import { FETCH_QUOTES } from '../actions';
import { combineReducers } from "redux";
import quotesReducer from './quotesReducer'

const rootReducer = combineReducers({
  [FETCH_QUOTES]: quotesReducer
});

export default rootReducer;
