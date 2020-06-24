import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginFormDumb from './Dumb'
import useForm from '../../hooks/useForm'
import { loginAction } from '../../store/actions/auth'

const FORM_NAME = 'login'

function useLoginForm(props) {
  const dispatch = useDispatch()
  const loginStatus = useSelector((state) => state.auth.login)

  useEffect(() => {
    if (loginStatus.success) props.history.push('/')
  }, [loginStatus.success, props.history])

  const form = useForm({
    username: '',
    password: '',
  })

  const handleSubmit = () => {
    dispatch(loginAction(form.formData))
  }

  return {
    formName: FORM_NAME,
    ...form,
    ...loginStatus,
    handleSubmit,
    ...props,
  }
}

export default function LoginForm(props) {
  const loginFormProps = useLoginForm(props)
  return <LoginFormDumb {...loginFormProps} />
}
