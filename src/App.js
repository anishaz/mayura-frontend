import React, { Component } from 'react';

// local
import Post from './components/post';

class App extends Component {
  render() {
    return (
      <div className="app">
       <h1>Mayura Dance</h1>
        <h3>Latest Posts</h3>
        <Post /> 
      </div>
    );
  }
}

export default App;
