import { FETCH_QUOTES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    default:
      return state;
  }
}