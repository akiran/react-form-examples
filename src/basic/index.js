import React, { Component } from 'react'
import ControlledInput from './ControlledInput'
import UncontrolledInput from './UncontrolledInput'

export default class Basic extends Component {
  render() {
    return (
      <div>
        <UncontrolledInput />
        <ControlledInput />
      </div>
    );
  }
}
