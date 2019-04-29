

// import { FETCH_QUOTES } from '../actions';

import { combineReducers } from 'redux';

export default function(state = {quotes: []}, action) {
  switch (action.type) {
    case 'FETCH_QUOTES':
      return action.payload;
    case 'FETCH_QUOTE':
      console.log('reducer', action.payload)
      return {quotes: action.payload};
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   [FETCH_QUOTES]: (state = [], action) => action.payload || state,
//   FETCH_QUOTE: (state = [], action) => action.payload || state
// });

// export default rootReducer;