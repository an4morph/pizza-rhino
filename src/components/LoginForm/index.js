import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginFormDumb from './Dumb'
import useForm from '../../hooks/useForm'
import { loginAction } from '../../store/actions/auth'
import { required, minLen, maxLen } from '../../services/validation'

const FORM_NAME = 'login'

function useLoginForm(props) {
  const dispatch = useDispatch()
  const loginStatus = useSelector((state) => state.auth.login)

  const [showValidation, setShowValidation] = useState(false)

  useEffect(() => {
    if (loginStatus.success) props.history.push('/')
  }, [loginStatus.success, props.history])

  const form = useForm({
    username: '',
    password: '',
  }, {
    username: [required, minLen(3), maxLen(100)],
    password: [required, minLen(6), maxLen(100)],
  })

  const handleSubmit = () => {
    setShowValidation(true)
    if (form.isValid) dispatch(loginAction(form.formData))
  }

  return {
    formName: FORM_NAME,
    showValidation,
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
