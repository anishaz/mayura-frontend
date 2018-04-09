import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// local
import client from './client';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage';
import InsidePage from './pages/inside-page';

// styles

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.location = this.location.bind(this);
    this.state = {
      items: {},
    };
  }

  componentWillMount() {
    const dataURL = client('local');
    const fetchForThisComponent = `${dataURL}wp-api-menus/v2/menus/3`;
    fetch(fetchForThisComponent)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          items: res.items,
        });
      });
  }

  location() {
    const url = window.location.pathname;
    if (url !== '/') {
      this.locationClass = url.substring(1);
    } else {
      this.locationClass = 'home';
    }
    return this.locationClass;
  }


  render() {
    const locationClass = this.location();
    return (
      <div className={`app body ${locationClass}`}>
        <div className="slide-bg">
          <div className="wrapper">
            <Header items={this.state.items} />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about-us" component={InsidePage} />
              <Route exact path="/about-us" component={InsidePage} />
              <Route exact path="/classes" component={InsidePage} />
              <Route exact path="/media" component={InsidePage} />
              <Route exact path="/contact" component={InsidePage} />
            </Switch>
            <Footer items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
