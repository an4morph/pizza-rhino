import React from 'react'
import { shape, string, func, bool } from 'prop-types'
import Input from '../Input'
import Button from '../Button'

function LoginForm({
  formName, formData, changeField, handleSubmit,
  loading, failed, error,
}) {
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
      {failed && <div>{error}</div>}
      <Button
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? 'Loading' : 'Log in'}
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
  handleSubmit: func.isRequired,
  formName: string.isRequired,
  loading: bool.isRequired,
  failed: bool.isRequired,
  error: string,
}

export default LoginForm
