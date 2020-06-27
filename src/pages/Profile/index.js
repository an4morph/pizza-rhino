import React from 'react'
import { object } from 'prop-types'
import PageTemplate from '../../components/PageTemplate'
import ProfileChangesForm from '../../components/ProfileChangesForm'
import BackTitle from '../../components/BackTitle'
import styles from './page.module.scss'

function ProfilePage({ history }) {
  return (
    <PageTemplate>
      <BackTitle
        history={history}
        title="Profile"
        subtitle="Settings"
        className={styles.title}
      />
      <ProfileChangesForm />
    </PageTemplate>
  )
}

ProfilePage.propTypes = {
  history: object.isRequired,
}

export default ProfilePage
