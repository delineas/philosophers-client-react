import React, { Component } from 'react';
import * as ApiClient from '../services/ApiClient';
import QuoteItem from './QuoteItem';

class QuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      pageNext: 'quotes'
    };
  }

  componentDidMount = () => {
    this.loadMore();
  };

  loadMore = async () => {
    const response = await ApiClient.get(this.state.pageNext);
    response
      .json()
      .then(data => {
        let pageNext = '';
        if (data.links.next != null) {
          pageNext = data.links.next.replace(
            process.env.REACT_APP_HOST_API,
            ''
          );
        } else {
          pageNext = data.links.next;
        }
        this.setState(prevState => ({
          quotes: prevState.quotes.concat(data.data),
          pageNext
        }));
      })
      .catch(console.log);
  };

  renderList = () => {
    const quotes = this.state.quotes;
    return quotes.map(quote => {
      console.log(quote);
      return (
        <QuoteItem
          key={quote.id}
          quote={quote.attributes}
          author={quote.relationships.author.attributes}
          votes={quote.relationships.vote.meta}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {this.renderList()}
        <button className="button" onClick={this.loadMore}>
          Ver más
        </button>
      </div>
    );
  }
}

export default QuoteList;
