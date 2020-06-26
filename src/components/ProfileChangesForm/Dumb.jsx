import React from 'react'
import { shape, string, func, bool } from 'prop-types'
import Input from '../Input'
import Button from '../Button'

function ProfileChangesForm({
  formName, formData, changeField, handleSubmit,
  showValidation, validation,
}) {
  const { password, repeatPassword } = formData

  return (
    <>
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
      <Button onClick={handleSubmit}>
        Confirm changes
      </Button>
    </>
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
}

export default ProfileChangesForm
