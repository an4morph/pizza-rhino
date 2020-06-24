import React from 'react'
import { object } from 'prop-types'
import PageTemplate from '../../components/PageTemplate'
import SignupForm from '../../components/SignupForm'

function SignupPage({ history }) {
  return (
    <PageTemplate>
      <SignupForm history={history} />
    </PageTemplate>
  )
}

SignupPage.propTypes = {
  history: object.isRequired,
}

export default SignupPage
