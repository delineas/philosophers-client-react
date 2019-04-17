import React, { Component } from 'react'

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: {
        voteable_id: 0,
        type: ''
      }
    };
  }

  componentDidMount = () => {
    // this.hydrateWithLocalStorage();
    // window.addEventListener('beforeunload', this.saveToLocalStorage.bind(this));
  };

  componentWillUnmount = () => {
    // window.removeEventListener('beforeunload', this.saveToApi.bind(this));
    // this.saveToApi();
  };

  store = newVote => {
    fetch(process.env.REACT_APP_HOST_API + 'votes', {
      method: 'post',
      body: JSON.stringify(newVote)
    })
      .then(function(response) {
        console.log(response)
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  };

  update = (updatedVote) => {
    fetch(process.env.REACT_APP_HOST_API + 'votes/relationship/quote/' + updatedVote.voteable_id, {
      method: 'put',
      body: JSON.stringify(updatedVote)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  };

  vote = (id, action, votes, callback) => {

    let newVote = {
      voteable_id: id,
      type: action
    };
    if (this.isVoted(votes)) {
      console.log(newVote)
      this.update(newVote);
      callback();
      return;
    }

    this.store(newVote);
    callback();
  };

  updateVotes = (newVote) => {
    this.setState({
      vote: newVote
    });
  };

  isVoted = (votes) => {
    return (votes > 0) ? true : false;
  };

  render = () => {
    const { id, action, votes, callback } = this.props;
    return (
      <button
        onClick={() => this.vote(id, action, votes, callback)}
        className={`button is-primary is-fullwidth ${
          this.isVoted(votes) ? 'is-danger' : 'no-voted'
        }`}
      >
        <i className={`fas fa-thumbs-${action}`} />
      </button>
    );
  };
}

export default Vote;
