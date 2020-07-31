import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import Authorized from './Authorized'
import Unauthorized from './Unauthorized'

const Container = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 29px;
  margin-bottom: 39px;
`

function AuthBlock({ isLogged = false }) {
  return (
    <Container>
      {
        isLogged
          ? <Authorized />
          : <Unauthorized />
      }
    </Container>
  )
}

AuthBlock.propTypes = {
  isLogged: bool,
}

export default AuthBlock
