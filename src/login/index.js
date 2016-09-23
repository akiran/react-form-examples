import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.setField = this.setField.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  setField(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }
  validate() {
    const error = !(this.state.username && this.state.password)
    this.setState({error: error ? 'Please fill in fields': ''})
    return error
  }
  submitHandler(e) {
    e.preventDefault()
    const error = this.validate()
    if (error) {
      return 
    }
    console.log(this.state)
    // fetch('/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    // }).then(response) {
    //   console.log(response)
    // }
  }
  render() {
    const { username, password } = this.state
    return (
      <div>
        <h4>Simple login form</h4>
        <form onSubmit={this.submitHandler}>
          <label>Username</label>
          <input 
            className='form-control' 
            type='text' 
            placeholder='User name'
            value={username} 
            onChange={this.setField.bind(null, 'username')}/>
          <label>Password</label>
          <input 
            className='form-control'
            type='password' 
            placeholder='Password'
            value={password}
            onChange={this.setField.bind(null, 'password')} />
          <input className='btn btn-primary' type='submit' value='Login' />
          <div className='error'>{this.state.error}</div>
        </form>
      </div>
    );
  }
}