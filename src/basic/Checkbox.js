import React, { Component } from 'react'

export default class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      remember: false
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({
      remember: e.target.checked
    })
  }
  render() {
    return (
      <form>
        <div className="checkbox">
          <label>
            <input 
              type="checkbox" 
              checked={this.state.remember} 
              onChange={this.changeHandler} /> 
              Remember password
          </label>
        </div>
        <div>{this.state.remember ? 'Checked': null}</div>
      </form>
    );
  }
}