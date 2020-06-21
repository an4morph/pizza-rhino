import React from 'react'
import ProfileChangesFormDumb from './Dumb'
import useForm from '../../hooks/useForm'

const FORM_NAME = 'profileChanges'

function useProfileChangesForm(props) {
  const form = useForm({
    username: '',
    password: '',
    repeatPassword: '',
  })

  const handleChangeProfile = () => {}

  return {
    formName: FORM_NAME,
    ...form,
    handleChangeProfile,
    ...props,
  }
}

export default function ProfileChangesForm(props) {
  const profileChangesProps = useProfileChangesForm(props)
  return <ProfileChangesFormDumb {...profileChangesProps} />
}
