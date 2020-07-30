import React from 'react'
import { shape, string, func, bool } from 'prop-types'
import styled from 'styled-components'
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

function LoginForm({
  formName, formData, changeField, handleSubmit,
  loading, failed, error, validation, showValidation,
}) {
  const { username, password } = formData

  return (
    <Form
      onSubmit={handleSubmit}
      submitting={loading}
      buttonText="Log in"
      submitFailed={failed}
      error={error}
      title={<StyledTitle tag="h1">Log in</StyledTitle>}
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
    </Form>
  )
}

LoginForm.propTypes = {
  formData: shape({
    username: string.isRequired,
    password: string.isRequired,
  }).isRequired,
  validation: shape({
    username: string.isRequired,
    password: string.isRequired,
  }).isRequired,
  changeField: func.isRequired,
  handleSubmit: func.isRequired,
  formName: string.isRequired,
  loading: bool.isRequired,
  failed: bool.isRequired,
  error: string,
  showValidation: bool.isRequired,
}

export default LoginForm
