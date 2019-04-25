import * as ApiClient from '../services/ApiClient';

export const FETCH_QUOTES = 'FETCH_QUOTES';

export const fetchQuotes = () => {
  return async dispatch => {
    const response = await ApiClient.get('quotes');

    response
      .json()
      .then(data => {
        dispatch({
          type: FETCH_QUOTES,
          payload: data.data
        });
      })
      .catch(console.log);
  };
};
