import React, { Component } from 'react'

export default class ControlledInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruit: 'apple'
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({
      fruit: e.target.value 
    })
  }
  render() {
    return (
      <form>
        <div className='form-group'>
          <label>Simple Select box</label>
          <select 
            className='form-control' 
            value={this.state.fruit}
            onChange={this.changeHandler}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>{this.state.fruit}</div>
      </form>
    );
  }
}
