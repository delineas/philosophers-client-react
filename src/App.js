import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import QuoteRandomScreen from './screens/QuoteRandomScreen';
import QuoteListScreen from './screens/QuoteListScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import Header from './components/Header';

import reducers from './reducers';
import { logger } from './middlewares';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//const store = createStore(reducers, { fetchQuotes: [] }, applyMiddleware(thunk));
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Header />
            <section className="section">
              <Switch>
                <Route path="/" exact component={QuoteRandomScreen} />
                <Route path="/list" component={QuoteListScreen} />
                <Route component={NotFoundScreen} />
              </Switch>
            </section>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
