import React from 'react'
import { shape, string, func, bool } from 'prop-types'
import Input from '../Input'
import Form from '../Form'
import Typography from '../Typography'
import styles from './form.module.scss'

function SignupForm({
  formName, formData, changeField, handleSubmit, className,
  loading, failed, error, showValidation, validation,
}) {
  const { username, password, repeatPassword } = formData

  return (
    <Form
      className={className}
      onSubmit={handleSubmit}
      submitting={loading}
      buttonText="Sign up"
      submitFailed={failed}
      error={error}
      title={<Typography className={styles.title} tag="h1">Sign up</Typography>}
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
      <Input
        className={styles.field}
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
  className: string,
}

export default SignupForm
