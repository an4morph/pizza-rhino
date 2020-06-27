import React from 'react'
import { object } from 'prop-types'
import PageTemplate from '../../components/PageTemplate'
import LoginForm from '../../components/LoginForm'
import styles from './page.module.scss'

function LoginPage({ history }) {
  return (
    <PageTemplate className={styles.page}>
      <LoginForm history={history} />
    </PageTemplate>
  )
}

LoginPage.propTypes = {
  history: object.isRequired,
}

export default LoginPage
