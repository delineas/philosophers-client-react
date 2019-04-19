import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import QuoteRandomScreen from './screens/QuoteRandomScreen';
import QuoteListScreen from './screens/QuoteListScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import Header from './components/Header';

class App extends Component {
  
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;
