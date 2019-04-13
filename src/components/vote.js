import React, { Component } from 'react'

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: []
    };
  }

  componentDidMount = () => {
    this.hydrateWithLocalStorage();

    window.addEventListener('beforeunload', this.saveToLocalStorage.bind(this));
  };

  componentWillUnmount = () => {
    window.removeEventListener(
      'beforeunload',
      this.saveToLocalStorage.bind(this)
    );
    this.saveToLocalStorage();
  };

  hydrateWithLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  };

  saveToLocalStorage = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  };

  vote = (id, action, callback) => {
    const votes = [...this.state.votes];
    const updatedVotes = votes.filter(item => item.id !== id);

    if (this.isVoted(id, action)) {
      this.updateVotes(updatedVotes);
      callback();
      return;
    }

    updatedVotes.push({
      id,
      action
    });

    this.updateVotes(updatedVotes);
    callback();
  };

  updateVotes = updatedVotes => {
    this.setState({
      votes: updatedVotes
    });
  };

  isVoted = (id, action) => {
    const votes = [...this.state.votes];
    return votes.filter(item => item.id === id && item.action === action)
      .length;
  };

  render = () => {
    const { id, action, callback } = this.props;
    return (
      <button
        onClick={() => this.vote(id, action, callback)}
        className={`button is-primary is-fullwidth ${
          this.isVoted(id, action) ? 'is-danger' : 'no-voted'
        }`}
      >
        <i className={`fas fa-thumbs-${action}`} />
      </button>
    );
  };
}

export default Vote;
