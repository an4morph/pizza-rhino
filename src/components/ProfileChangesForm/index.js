import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileChangesFormDumb from './Dumb'
import useForm from '../../hooks/useForm'
import { changePasswordAction } from '../../store/actions/auth'
import { required, minLen, maxLen, passwordMatch } from '../../services/validation'

const FORM_NAME = 'profileChanges'

function useProfileChangesForm(props) {
  const dispatch = useDispatch()
  const changePasswordStatus = useSelector((state) => state.auth.changePassword)

  const [showValidation, setShowValidation] = useState(false)

  const form = useForm({
    password: '',
    repeatPassword: '',
  }, (values) => ({
    password: [required, minLen(6), maxLen(100)],
    repeatPassword: [required, passwordMatch(values.password)],
  }))

  const handleSubmit = () => {
    setShowValidation(true)
    if (form.isValid) dispatch(changePasswordAction({ newPassword: form.formData.password }))
  }

  return {
    formName: FORM_NAME,
    ...form,
    showValidation,
    ...changePasswordStatus,
    handleSubmit,
    ...props,
  }
}

export default function ProfileChangesForm(props) {
  const profileChangesProps = useProfileChangesForm(props)
  return <ProfileChangesFormDumb {...profileChangesProps} />
}
