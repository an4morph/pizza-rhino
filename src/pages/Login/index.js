import React from 'react'
import { object } from 'prop-types'
import PageTemplate from '../../components/PageTemplate'
import LoginForm from '../../components/LoginForm'

function LoginPage({ history }) {
  return (
    <PageTemplate>
      <LoginForm history={history} />
    </PageTemplate>
  )
}

LoginPage.propTypes = {
  history: object.isRequired,
}

export default LoginPage
