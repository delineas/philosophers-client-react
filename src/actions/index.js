import * as ApiClient from '../services/ApiClient';

export const FETCH_QUOTES = 'quotes';

export const fetchQuotes = (page = 'quotes') => {

  return async dispatch => {
    const response = await ApiClient.get(page);

    response
      .json()
      .then(data => {
        console.log(data)
        dispatch({
          type: FETCH_QUOTES,
          payload: data.data,
          links: data.links
        });
      })
      .catch(console.log);
  };
};
