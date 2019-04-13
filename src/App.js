import React, { Component } from 'react';
import './App.css';
import Author from './components/author';

class App extends Component {
  state = {
    philosopher: [],
    quote: ''
  };
  refreshItem = () => {
    console.log('hello')
    const philosophers = [3101, 3121, 3125, 3285, 3264];
    fetch(process.env.REACT_APP_HOST_API + 'authors/' + philosophers[
      Math.floor(Math.random() * philosophers.length)
    ])
      .then(res => res.json())
      .then(data => {
        console.log(data)
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
  componentDidMount = () => this.refreshItem()
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <Author
            philosopher={this.state.philosopher}
            quote={this.state.quote}
            handler={this.refreshItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
