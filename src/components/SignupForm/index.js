import React from 'react'
import SignupFormDumb from './Dumb'
import useForm from '../../hooks/useForm'

const FORM_NAME = 'signup'

function useSignupForm(props) {
  const form = useForm({
    username: '',
    password: '',
    repeatPassword: '',
  })

  const handleSignup = () => {}

  return {
    formName: FORM_NAME,
    ...form,
    handleSignup,
    ...props,
  }
}

export default function SignupForm(props) {
  const signupForm = useSignupForm(props)
  return <SignupFormDumb {...signupForm} />
}
