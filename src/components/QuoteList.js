import React, { Component } from 'react';
import * as ApiClient from '../services/ApiClient';
import QuoteItem from './QuoteItem';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';

class QuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      pageNext: 'quotes'
    };
  }

  componentDidMount = () => {
    //this.loadMore();
    this.props.fetchQuotes();
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
    const quotes = this.props.quotes;
    if (this.props.quotes.map != 'function') return;
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
    console.log(this.props)
    return (
      <div>
        {this.renderList()}
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
  return { quotes: state };
}

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(QuoteList);