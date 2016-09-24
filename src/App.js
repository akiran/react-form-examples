import React, { Component } from 'react';
import './App.css';
import Basic from './basic'
import TextMask from './text-mask'
import Login from './login'
import ReduxLogin from './redux-login'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Basic />
        <TextMask />
        <Login />
        <ReduxLogin />
      </div>
    );
  }
}

export default App;
