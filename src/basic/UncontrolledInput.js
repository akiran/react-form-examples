import React, { Component } from 'react'

export default class UncontrolledInput extends Component {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.inputRef = this.inputRef.bind(this)
  }
  submitHandler(e) {
    e.preventDefault()
    console.log(this.input.value, '')
  }
  inputRef(ref) {
    this.input = ref
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label>Uncontrolled Input</label>
          <input ref={this.inputRef} className='form-control' defaultValue='Hello' />
        </div>
      </form>
    );
  }
}
