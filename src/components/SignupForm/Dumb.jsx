import React from 'react'
import styled from 'styled-components'
import { shape, string, func, bool } from 'prop-types'
import Input from '../Input'
import Form from '../Form'
import Typography from '../Typography'

const StyledInput = styled(Input)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`
const StyledTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 21px;
  margin-top: 17px;
`

function SignupForm({
  formName, formData, changeField, handleSubmit,
  loading, failed, error, showValidation, validation,
}) {
  const { username, password, repeatPassword } = formData

  return (
    <Form
      onSubmit={handleSubmit}
      submitting={loading}
      buttonText="Sign up"
      submitFailed={failed}
      error={error}
      title={<StyledTitle tag="h1">Sign up</StyledTitle>}
    >
      <StyledInput
        formName={formName}
        name="username"
        label="Username"
        value={username}
        onChange={(value) => changeField('username', value)}
        error={showValidation ? validation.username : ''}
      />
      <StyledInput
        formName={formName}
        name="password"
        label="Password"
        value={password}
        onChange={(value) => changeField('password', value)}
        type="password"
        error={showValidation ? validation.password : ''}
      />
      <StyledInput
        formName={formName}
        name="repeatPassword"
        label="Repeat password"
        value={repeatPassword}
        onChange={(value) => changeField('repeatPassword', value)}
        type="password"
        error={showValidation ? validation.repeatPassword : ''}
      />
    </Form>
  )
}

SignupForm.propTypes = {
  formData: shape({
    username: string.isRequired,
    password: string.isRequired,
    repeatPassword: string.isRequired,
  }).isRequired,
  validation: shape({
    username: string.isRequired,
    password: string.isRequired,
    repeatPassword: string.isRequired,
  }).isRequired,
  changeField: func.isRequired,
  handleSubmit: func.isRequired,
  formName: string.isRequired,
  loading: bool.isRequired,
  failed: bool.isRequired,
  showValidation: bool.isRequired,
  error: string,
}

export default SignupForm
