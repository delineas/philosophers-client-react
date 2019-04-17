import React, { Component } from 'react';
import './App.css';
import * as ApiClient from './api/ApiClient';
import Quote from './components/Quote';

class App extends Component {
  state = {
    author: [],
    quote: '',
    votes: []
  };
  refreshItem = () => {
    ApiClient.get('quotes/random')
      .then(res => res.json())
      .then(data => {
        this.setState({
          quote: data.data.attributes,
          votes: data.data.relationships.vote.meta,
          author: data.data.relationships.author.attributes
        });
      })
      .catch(console.log);
  };
  componentDidMount = () => this.refreshItem();
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <Quote
            quote={this.state.quote}
            votes={this.state.votes}
            author={this.state.author}
            handler={this.refreshItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
