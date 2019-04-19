export function get(path) {
  return fetch(process.env.REACT_APP_HOST_API + path);
}

export function postQuoteVote(vote) {
  return fetch(process.env.REACT_APP_HOST_API + 'votes', {
    method: 'post',
    body: JSON.stringify(vote)
  });
}

export function putQuoteVote(vote) {
  return fetch(
    process.env.REACT_APP_HOST_API +
      'votes/relationships/quote/' +
      vote.voteable_id,
    {
      method: 'put',
      body: JSON.stringify(vote)
    }
  );
}
