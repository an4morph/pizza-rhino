import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignupFormDumb from './Dumb'
import useForm from '../../hooks/useForm'
import { signupAction } from '../../store/actions/auth'

const FORM_NAME = 'signup'

function useSignupForm(props) {
  const dispatch = useDispatch()
  const signupStatus = useSelector((state) => state.auth.signup)

  const form = useForm({
    username: '',
    password: '',
    repeatPassword: '',
  })

  useEffect(() => {
    if (signupStatus.success) props.history.push('/')
  }, [props.history, signupStatus.success])

  const { username, password } = form.formData

  const handleSubmit = () => {
    dispatch(signupAction({ username, password }))
  }

  return {
    formName: FORM_NAME,
    ...form,
    ...signupStatus,
    handleSubmit,
    ...props,
  }
}

export default function SignupForm(props) {
  const signupForm = useSignupForm(props)
  return <SignupFormDumb {...signupForm} />
}
