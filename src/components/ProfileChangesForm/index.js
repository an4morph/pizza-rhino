import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileChangesFormDumb from './Dumb'
import useForm from '../../hooks/useForm'
import { changePasswordAction } from '../../store/actions/auth'

const FORM_NAME = 'profileChanges'

function useProfileChangesForm(props) {
  const dispatch = useDispatch()
  const changePasswordStatus = useSelector((state) => state.auth.changePassword)

  const form = useForm({
    password: '',
    repeatPassword: '',
  })

  const handleSubmit = () => {
    dispatch(changePasswordAction({ newPassword: form.formData.password }))
  }

  return {
    formName: FORM_NAME,
    ...form,
    ...changePasswordStatus,
    handleSubmit,
    ...props,
  }
}

export default function ProfileChangesForm(props) {
  const profileChangesProps = useProfileChangesForm(props)
  return <ProfileChangesFormDumb {...profileChangesProps} />
}
