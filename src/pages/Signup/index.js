import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import PageTemplate from '../../components/PageTemplate'
import SignupForm from '../../components/SignupForm'

const StyledPage = styled(PageTemplate)`
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`

function SignupPage({ history }) {
  return (
    <StyledPage>
      <SignupForm history={history} />
    </StyledPage>
  )
}

SignupPage.propTypes = {
  history: object.isRequired,
}

export default SignupPage
