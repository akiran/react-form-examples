import React, { Component } from 'react'
import ControlledInput from './ControlledInput'
import UncontrolledInput from './UncontrolledInput'
import Checkbox from './Checkbox'
import Select from './Select'
import ReactSelect from './ReactSelect'
import Example from '../example'

export default class Basic extends Component {
  render() {
    return (
      <Example title='Basic form elements'>
        <UncontrolledInput />
        <ControlledInput />
        <Checkbox />
        <Select />
        <ReactSelect />
      </Example>
    );
  }
}
