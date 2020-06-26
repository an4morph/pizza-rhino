import React from 'react'
import { shape, string, func, bool } from 'prop-types'
import Input from '../Input'
import Button from '../Button'

function SignupForm({
  formName, formData, changeField, handleSubmit,
  loading, failed, error, showValidation, validation,
}) {
  const { username, password, repeatPassword } = formData

  return (
    <>
      <Input
        formName={formName}
        name="username"
        value={username}
        onChange={(value) => changeField('username', value)}
        error={showValidation ? validation.username : ''}
      />
      <Input
        formName={formName}
        name="password"
        value={password}
        onChange={(value) => changeField('password', value)}
        type="password"
        error={showValidation ? validation.password : ''}
      />
      <Input
        formName={formName}
        name="repeatPassword"
        value={repeatPassword}
        onChange={(value) => changeField('repeatPassword', value)}
        type="password"
        error={showValidation ? validation.repeatPassword : ''}
      />
      {failed && <div>{error}</div>}
      <Button
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? 'Loading' : 'Sign up'}
      </Button>
    </>
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
