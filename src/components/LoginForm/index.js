import React from 'react'
import LoginFormDumb from './Dumb'
import useForm from '../../hooks/useForm'

const FORM_NAME = 'login'

function useLoginForm(props) {
  const form = useForm({
    username: '',
    password: '',
  })

  const handleChangeProfile = () => {}

  return {
    formName: FORM_NAME,
    ...form,
    handleChangeProfile,
    ...props,
  }
}

export default function LoginForm(props) {
  const loginFormProps = useLoginForm(props)
  return <LoginFormDumb {...loginFormProps} />
}
