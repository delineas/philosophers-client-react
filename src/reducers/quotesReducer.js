import { FETCH_QUOTES } from '../actions';

const initState = {
  quotes: [],
  links: {}
};

const quoteReducer = (state = initState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        quotes: state.quotes.concat(action.payload),
        links: action.links
      };
    default:
      return state;
  }
};

export default quoteReducer;
