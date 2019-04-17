import React, { Component } from 'react';
import Vote from './Vote';

class Author extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { philosopher, quote, handler } = this.props;
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
              <Vote id={philosopher.id} action="up" callback={handler} />
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <Vote id={philosopher.id} action="down" callback={handler} />
            </span>
          </p>
        </footer>
      </div>
    );
  };
}

export default Author;
