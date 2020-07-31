import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const LoginButton = styled(Button)`
  max-width: 135px;
`

function Unauthorized() {
  return (
    <>
      <div>Login to receive bonuses and gifts</div>
      <LoginButton link="/login">Login</LoginButton>
    </>
  )
}

export default Unauthorized
