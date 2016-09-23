import React, { Component } from 'react';
import './App.css';
import Basic from './basic'
import Login from './login'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Basic />
        <Login />
      </div>
    );
  }
}

export default App;
