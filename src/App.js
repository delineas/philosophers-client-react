import React, { Component } from 'react';
import './App.css';
import Author from './components/author';

class App extends Component {
  state = {
    philosopher: [],
    quote: ''
  };
  componentDidMount() {
    const philosophers = [];
    fetch('http://philosophers-api.test/api/v1/authors/3101')
      .then(res => res.json())
      .then(data => {
        this.setState({
          philosopher: data.data.attributes,
          quote:
            data.data.relationships.quotes[
              Math.floor(Math.random() * data.data.relationships.quotes.length)
            ]
        });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <Author
            philosopher={this.state.philosopher}
            quote={this.state.quote}
          />
        </div>
      </div>
    );
  }
}

export default App;
