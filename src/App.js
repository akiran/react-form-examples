import React, { Component } from 'react';
import './App.css';
import Basic from './basic'
import TextMask from './text-mask'
import Login from './login'
import ReduxLogin from './redux-login'
import MultiStep from './multistep'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container" style={{marginBottom: 100}}>
          <Basic />
          <TextMask />
          <Login />
          <ReduxLogin />
          <MultiStep />
        </div>
      </Provider>
    );
  }
}

export default App;
