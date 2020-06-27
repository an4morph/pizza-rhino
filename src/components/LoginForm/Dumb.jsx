import React from 'react'
import { shape, string, func, bool } from 'prop-types'
import Input from '../Input'
import Form from '../Form'
import Typography from '../Typography'
import styles from './login.module.scss'

function LoginForm({
  formName, formData, changeField, handleSubmit, className,
  loading, failed, error, validation, showValidation,
}) {
  const { username, password } = formData

  return (
    <Form
      className={className}
      onSubmit={handleSubmit}
      submitting={loading}
      buttonText="Log in"
      submitFailed={failed}
      error={error}
      title={<Typography className={styles.title} tag="h1">Log in</Typography>}
    >
      <Input
        className={styles.field}
        formName={formName}
        name="username"
        label="Username"
        value={username}
        onChange={(value) => changeField('username', value)}
        error={showValidation ? validation.username : ''}
      />
      <Input
        className={styles.field}
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
  className: string,
}

export default LoginForm
