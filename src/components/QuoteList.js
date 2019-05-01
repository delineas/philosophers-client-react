import React, { Component } from 'react';
import * as ApiClient from '../services/ApiClient';
import QuoteItem from './QuoteItem';
import { connect } from 'react-redux';
import { fetchQuotes }  from '../actions';

class QuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNext: 'quotes'
    };
  }

  componentDidMount = () => {
    //this.loadMore();
    this.props.fetchQuotes();
    console.log('willMount', this.props);
    //this.props.fetchQuoteP();
  };

  loadMore = () => {
    this.props.fetchQuotes(this.setPageNext(this.props.links.next));
  };

  setPageNext = (page = null) => {
    console.log(page, process.env.REACT_APP_HOST_API);
    if (page != null) {
      return page.replace(process.env.REACT_APP_HOST_API, '');
    }
    return page;
  };

  renderQuote = (quote) => {
    return (
      <QuoteItem
        key={quote.id}
        quote={quote.attributes}
        author={quote.relationships.author.attributes}
        votes={quote.relationships.vote.meta}
      />
    );
  };

  render() {
    console.log('renderQuoteList', this.props);

    return (
      <div>
        {this.props.quotes.map(this.renderQuote)}
        {this.props.links.next != null && (
          <button className="button" onClick={this.loadMore}>
            Ver más
          </button>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes.quotes,
    links: state.quotes.links,
    fetchQuotes
  };
}


export default connect(
  mapStateToProps,
  {fetchQuotes}
)(QuoteList);