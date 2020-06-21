import React from 'react'
import { shape, string, func } from 'prop-types'
import Input from '../Input'
import Button from '../Button'

function SignupForm({ formName, formData, changeField, handleSignup }) {
  const { username, password, repeatPassword } = formData

  return (
    <>
      <Input
        formName={formName}
        name="username"
        value={username}
        onChange={(value) => changeField('username', value)}
      />
      <Input
        formName={formName}
        name="password"
        value={password}
        onChange={(value) => changeField('password', value)}
        type="password"
      />
      <Input
        formName={formName}
        name="repeatPassword"
        value={repeatPassword}
        onChange={(value) => changeField('repeatPassword', value)}
        type="password"
      />
      <Button onClick={handleSignup}>
        Sign up
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
  changeField: func.isRequired,
  handleSignup: func.isRequired,
  formName: string.isRequired,
}

export default SignupForm
