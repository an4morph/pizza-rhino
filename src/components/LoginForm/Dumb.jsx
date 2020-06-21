import React from 'react'
import { shape, string, func } from 'prop-types'
import Input from '../Input'
import Button from '../Button'

function LoginForm({ formName, formData, changeField, handleLogin }) {
  const { username, password } = formData

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
      <Button onClick={handleLogin}>
        Sign up
      </Button>
    </>
  )
}

LoginForm.propTypes = {
  formData: shape({
    username: string.isRequired,
    password: string.isRequired,
  }).isRequired,
  changeField: func.isRequired,
  handleLogin: func.isRequired,
  formName: string.isRequired,
}

export default LoginForm
