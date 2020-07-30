import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import PageTemplate from '../../components/PageTemplate'
import LoginForm from '../../components/LoginForm'

const StyledPage = styled(PageTemplate)`
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`

function LoginPage({ history }) {
  return (
    <StyledPage>
      <LoginForm history={history} />
    </StyledPage>
  )
}

LoginPage.propTypes = {
  history: object.isRequired,
}

export default LoginPage
