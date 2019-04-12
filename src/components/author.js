import React, { Component } from 'react'

class Author extends Component {
  constructor(args) {
    super(args)
    this.state = {
      votes: []
    }
  }

  vote = (id, type) => {
    const votes = [...this.state.votes];
    const updatedVotes = votes.filter(item => item.id !== id);

    if (this.isVoted(id, type)) {
      this.setState({
        votes: updatedVotes
      });
      return;
    }

    updatedVotes.push({
      id,
      type
    });

    this.setState({
      votes: updatedVotes
    });
    
  }

  isVoted = (id, type) => {
    const votes = [...this.state.votes];
    return votes.filter(item => item.id === id && item.type === type).length;
  }

  render = () => {
    const { philosopher, quote } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={process.env.REACT_APP_ASSETS + philosopher.image}
              alt={philosopher.name}
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="subtitle is-6">“{quote}”</p>
          <p className="title is-4">{philosopher.name}</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <button onClick={() => this.vote(philosopher.id, "up")}
                className={`button is-primary is-fullwidth ${this.isVoted(philosopher.id, "up") ? "is-danger" : "no-voted"}`}
              ><i className="fas fa-thumbs-up"></i></button>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <button onClick={() => this.vote(philosopher.id, "down")}
                className={`button is-primary is-fullwidth ${this.isVoted(philosopher.id, "down") ? "is-danger" : "no-voted"}`}
              ><i className="fas fa-thumbs-down"></i></button>
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default Author;
