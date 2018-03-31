import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// local
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
