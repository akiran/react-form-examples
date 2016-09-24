import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Example from '../example'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className='form-control' {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

function StepOne(props) {
  return (
    <div>
      <h2> Personal</h2>
      <Field name="firstName" component={renderField} type="text" label="First Name"/>
      <Field name="lastName" component={renderField} type="text" label="Last Name"/>
       <div style={{marginTop: 20}}>
          <button className='btn btn-primary' onClick={props.next}>
            Next
          </button>
        </div>
    </div>
  )
}

function StepTwo(props) {
  return (
    <div>
      <h2>Professional</h2>
      <Field name="company" component={renderField} type="text" label="Company"/>
      <Field name="designation" component={renderField} type="text" label="Designation"/>
      <div style={{marginTop: 20}}>
        <button className='btn' onClick={props.previous} style={{marginRight: 20}}>
          Previous
        </button>
        <button className='btn btn-primary' onClick={props.next}>
          Next
        </button>
      </div>
    </div>
  )
}

function StepThree(props) {
  return (
    <div>
      <h2>social</h2>
      <Field name="twitter" component={renderField} type="text" label="Twitter"/>
      <Field name="facebook" component={renderField} type="text" label="Facebook"/>
      <div style={{marginTop: 20}}>
        <button className='btn' onClick={props.previous} style={{marginRight: 20}}>
          Previous
        </button>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </div>
  )
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next(e) {
    e.preventDefault()
    this.setState({ step: this.state.step + 1 })
  }
  previous(e) {
    e.preventDefault()
    this.setState({ step: this.state.step - 1 })
  }
  render() {
    const { handleSubmit } = this.props
    const {step} = this.state
    return (
      <Example title='Multistep form'>
        <form onSubmit={handleSubmit}>
          {step === 1 ? <StepOne {...this.props} next={this.next} /> : null}
          {step === 2 ? <StepTwo {...this.props} next={this.next} previous={this.previous} /> : null}
          {step === 3 ? <StepThree {...this.props} previous={this.previous}/> : null}
        </form>
      </Example>
    )
  }
}


export default reduxForm({
  form: 'multistep',
})(Form)


