import * as ApiClient from '../services/ApiClient';
import axios from 'axios';

export const FETCH_QUOTES = 'quotes';

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

export function fetchQuoteP() {
  return (dispatch, getState) => {
    const request = axios.get(process.env.REACT_APP_HOST_API + 'quotes');
    request.then(({ data }) => {
      console.log('hola',data);
      dispatch({ type: 'FETCH_QUOTE', payload: data });
    });
  };
}
