import React from 'react'
import { object } from 'prop-types'
import PageTemplate from '../../components/PageTemplate'
import SignupForm from '../../components/SignupForm'
import styles from './page.module.scss'

function SignupPage({ history }) {
  return (
    <PageTemplate className={styles.page}>
      <SignupForm history={history} />
    </PageTemplate>
  )
}

SignupPage.propTypes = {
  history: object.isRequired,
}

export default SignupPage
