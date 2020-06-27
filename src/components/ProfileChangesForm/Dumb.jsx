import React from 'react'
import { shape, string, func, bool } from 'prop-types'
import Input from '../Input'
import Form from '../Form'
import Typography from '../Typography'
import styles from './form.module.scss'

function ProfileChangesForm({
  formName, formData, changeField, handleSubmit, failed,
  showValidation, validation, className, loading, error,
}) {
  const { password, repeatPassword } = formData

  return (
    <Form
      className={className}
      onSubmit={handleSubmit}
      submitting={loading}
      buttonText="Confirm changes"
      submitFailed={failed}
      error={error}
      title={<Typography className={styles.title} tag="h2">Change password</Typography>}
    >
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

ProfileChangesForm.propTypes = {
  formData: shape({
    password: string.isRequired,
    repeatPassword: string.isRequired,
  }).isRequired,
  validation: shape({
    password: string.isRequired,
    repeatPassword: string.isRequired,
  }).isRequired,
  changeField: func.isRequired,
  handleSubmit: func.isRequired,
  formName: string.isRequired,
  showValidation: bool.isRequired,
  className: string,
  loading: bool.isRequired,
  failed: bool.isRequired,
  error: string,
}

export default ProfileChangesForm
