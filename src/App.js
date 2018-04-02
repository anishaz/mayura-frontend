import React from 'react';
import { Switch, Route } from 'react-router-dom';

// local
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage';
import InsidePage from './pages/inside-page';

// styles

import './App.css';


const App = () => (
  <div className="app body">
    <div className="slide-bg">
      <div className="wrapper">
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
    </div>
  </div>
);

export default App;
