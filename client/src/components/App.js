import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Contact from './Contact';
import FooterNav from './Footer';
import Header from './Header';
import Landing from './Landing';

class App extends Component {
  render() {
    return(
      <div className="container">
        <BrowserRouter>
          <Header />
          <Landing path="/" />
          <Contact path="/contact/" />
          <FooterNav />
        </BrowserRouter>
      </div>
    )
    }
}

export default App;