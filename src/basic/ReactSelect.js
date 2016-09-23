import React, { Component } from 'react'
import Select from 'react-select'

export default class ControlledInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruit: 'apple'
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(value) {
    this.setState({
      fruit: value 
    })
  }
  render() {
    const options = [
      {value: 'apple', label: 'Apple'},
      {value: 'banana', label: 'Banana'},
      {value: 'orange', label: 'Orange'}
    ]
    return (
      <form>
        <div>
          <label>Advanced Select box</label>
          <Select 
            value={this.state.fruit}
            onChange={this.changeHandler}
            options={options}
            multi={true}
          />
        </div>
      </form>
    );
  }
}
