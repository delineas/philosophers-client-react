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
        this.setState(prevState => ({
          quotes: prevState.quotes.concat(data.data),
          pageNext: this.setPageNext(data.links.next)
        }));
      })
      .catch(console.log);
  };

  setPageNext = (page = null) => {
    if(page != null) {
      return page.replace(
        process.env.REACT_APP_HOST_API,
        ''
      );
    }
    return page;
  }

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
    let button = ''
    if(this.state.pageNext != null) {
      button = (
        <button className="button" onClick={this.loadMore}>
          Ver más
        </button>
      );
    }
    return (
      <div>
        {this.renderList()}
        {button}
      </div>
    );
  }
}

export default QuoteList;
