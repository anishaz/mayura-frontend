import React from 'react';
import { Switch, Route } from 'react-router-dom';

// local
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import InsidePage from './pages/inside-page';

// styles

import './App.css';


const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about-us" component={InsidePage} />
      <Route exact path="/about-us" component={InsidePage} />
      <Route exact path="/classes" component={InsidePage} />
      <Route exact path="/media" component={InsidePage} />
      <Route exact path="/contact" component={InsidePage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
