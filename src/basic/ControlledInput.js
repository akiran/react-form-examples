import React, { Component } from 'react'

export default class ControlledInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greet: 'Hello'
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({
      greet: e.target.value 
    })
  }
  submitHandler(e) {
    e.preventDefault()
    console.log(this.state.greet)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label>Controlled Input</label>
          <input 
            className='form-control' 
            value={this.state.greet}
            onChange={this.changeHandler} />
        </div>
        <div>{this.state.greet}</div>
      </form>
    );
  }
}
