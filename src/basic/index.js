import React, { Component } from 'react'
import ControlledInput from './ControlledInput'
import UncontrolledInput from './UncontrolledInput'
import Checkbox from './Checkbox'
import Select from './Select'
import ReactSelect from './ReactSelect'

export default class Basic extends Component {
  render() {
    return (
      <div>
        <UncontrolledInput />
        <ControlledInput />
        <Checkbox />
        <Select />
        <ReactSelect />
      </div>
    );
  }
}
