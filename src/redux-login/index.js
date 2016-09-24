import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Example from '../example'
import { SubmissionError } from 'redux-form'

const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = (values) => {
  return sleep(1000)
          .then(() => {
            if (values.username !== 'admin') {
              throw new SubmissionError({ username: 'Wrong Username', _error: 'Login failed!' })
            } else {
              // login success action
            }
          })
    
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className='form-control' {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const LoginForm = (props) => {
  const {error, errors, handleSubmit, reset, pristine, submitting } = props
  console.log(error, errors)
  return (
    <Example title='Login form with redux'>
      <form onSubmit={handleSubmit}>
        <Field name="username" component={renderField} type="text" label="User Name"/>
        <Field name="password" component={renderField} type="password" label="Password"/>
        {error && <strong>{error}</strong>}
        <div style={{marginTop: 20}}>
          <button type="button" className='btn' disabled={pristine || submitting} onClick={reset} style={{marginRight: 20}}>Reset</button>
          <button type="submit" className='btn btn-primary' disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    </Example>
  )
}

export default reduxForm({
  form: 'simple',
  validate,
  onSubmit
})(LoginForm)


//Api
/*
reduxForm({
  form: 'unique form name',
  validate: (values) => { return errors }
  asyncValidate: (values) => {return promise} // throw {field1: 'error message'}
  onSubmit: (values, dispatch) => {return promise} // throw errors if validation fails
  onSubmitSuccess: (result, dispatch) => {}
  onSubmitFail: {errors, dispatch} => {},
  asyncBlurFields: [fields] // fields on which asyncValidate should be triggered on blur
})

*/