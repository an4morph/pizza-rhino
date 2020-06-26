import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignupFormDumb from './Dumb'
import useForm from '../../hooks/useForm'
import { signupAction } from '../../store/actions/auth'
import { required, minLen, maxLen, passwordMatch } from '../../services/validation'

const FORM_NAME = 'signup'

function useSignupForm(props) {
  const dispatch = useDispatch()
  const signupStatus = useSelector((state) => state.auth.signup)

  const [showValidation, setShowValidation] = useState(false)

  const form = useForm({
    username: '',
    password: '',
    repeatPassword: '',
  }, (values) => ({
    username: [required, minLen(3), maxLen(100)],
    password: [required, minLen(6), maxLen(100)],
    repeatPassword: [required, passwordMatch(values.password)],
  }))

  useEffect(() => {
    if (signupStatus.success) props.history.push('/')
  }, [props.history, signupStatus.success])

  const { username, password } = form.formData

  const handleSubmit = () => {
    setShowValidation(true)
    if (form.isValid) dispatch(signupAction({ username, password }))
  }

  return {
    formName: FORM_NAME,
    ...form,
    ...signupStatus,
    showValidation,
    handleSubmit,
    ...props,
  }
}

export default function SignupForm(props) {
  const signupForm = useSignupForm(props)
  return <SignupFormDumb {...signupForm} />
}
