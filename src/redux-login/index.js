import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import LoginForm from './LoginForm'

const ReduxLoginForm = () => (
  <Provider store={store}>
    <LoginForm />
  </Provider>
)


export default ReduxLoginForm