import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import PageTemplate from '../../components/PageTemplate'
import ProfileChangesForm from '../../components/ProfileChangesForm'
import BackTitle from '../../components/BackTitle'

const StyledTitle = styled(BackTitle)`
  margin-bottom: 20px;
`

function ProfilePage({ history }) {
  return (
    <PageTemplate>
      <StyledTitle
        history={history}
        title="Profile"
        subtitle="Settings"
      />
      <ProfileChangesForm />
    </PageTemplate>
  )
}

ProfilePage.propTypes = {
  history: object.isRequired,
}

export default ProfilePage
