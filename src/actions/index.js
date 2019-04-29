import * as ApiClient from '../services/ApiClient';

export const FETCH_QUOTES = 'quotes';

export const fetchQuotes = () => {

  return async dispatch => {
    const response = await ApiClient.get('quotes');

    response
      .json()
      .then(data => {
        console.log(data)
        dispatch({
          type: FETCH_QUOTES,
          quotes: data.data,
          links: data.links
        });
      })
      .catch(console.log);
  };
};
