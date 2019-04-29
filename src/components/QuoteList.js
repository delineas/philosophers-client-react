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
        {/* {this.props.quotes.map(this.renderQuote)} */}
        {this.state.pageNext != null && (
          <button className="button" onClick={this.loadMore}>
            Ver más
          </button>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return state;
}


export default connect(
  mapStateToProps,
  {fetchQuotes}
)(QuoteList);