import React, { Component } from 'react';

// local
import Posts from './components/posts';

class App extends Component {
  render() {
    return (
      <div className="app">
       <Posts /> 
      </div>
    );
  }
}

export default App;
