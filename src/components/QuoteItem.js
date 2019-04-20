import React, { Component } from 'react';

class QuoteItem extends Component {
  render = () => {
    const { quote, votes, author } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={process.env.REACT_APP_ASSETS + author.image}
              alt={author.name}
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="subtitle is-6">“{quote.quote}”</p>
          <p className="title is-4">{author.name}</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>Up: {votes.up}</span>
          </p>
          <p className="card-footer-item">
            <span>Down: {votes.down}</span>
          </p>
        </footer>
      </div>
    );
  };
}

export default QuoteItem;
