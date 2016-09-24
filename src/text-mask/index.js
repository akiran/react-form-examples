import React, { Component } from 'react'
import Example from '../example'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'


const telephoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

const amountMask = createNumberMask({
  prefix: '$'
})
const decimalMask = createNumberMask({
  prefix: '',
  allowDecimal: true,
  allowNegative: true
})

const creditCardMask = function (raw) {
  const block = [/\d/, /\d/, /\d/, /\d/]
  const space = ['-']
  return block
          .concat(space)
          .concat(block)
          .concat(space)
          .concat(block)
          .concat(space)
          .concat(block)
}

export default class TextMask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({
      amount: e.target.value
    })
  }
  render() {
    return (
      <Example title='Text mask'>

        <label>Telephone</label>
        <MaskedInput 
          className='form-control' 
          mask={telephoneMask} 
          guide={false} />
          
        <label>Amount</label>
        <MaskedInput 
          className='form-control' 
          mask={amountMask} 
          guide={false} 
          value={this.state.amount}
          onChange={this.changeHandler}/>

        <label>Decimal Numbers</label>
        <MaskedInput 
          className='form-control' 
          mask={decimalMask} 
          guide={false} />

        <label>Credit Card</label>
        <MaskedInput 
          className='form-control' 
          mask={creditCardMask} 
          guide={false} />
      </Example>
    );
  }
}
