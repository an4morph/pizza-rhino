import React from 'react'
import { shape, string, func } from 'prop-types'
import Input from '../Input'
import Button from '../Button'

function ProfileChangesForm({ formName, formData, changeField, handleSubmit }) {
  const { password, repeatPassword } = formData

  return (
    <>
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
  changeField: func.isRequired,
  handleSubmit: func.isRequired,
  formName: string.isRequired,
}

export default ProfileChangesForm
