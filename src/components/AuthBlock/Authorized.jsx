import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { func } from 'prop-types'
import IconButton from '../IconButton'
import LogoutIcon from '../Icons/Logout'
import UserIcon from '../Icons/User'

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
`
const UserName = styled.div`
  margin-left: 13px;
`

function Authorized({ onLogout }) {
  return (
    <>
      <StyledNavLink to="/profile">
        <UserIcon />
        <UserName>username</UserName>
      </StyledNavLink>
      <IconButton icon={<LogoutIcon />} onClick={onLogout} />
    </>
  )
}

Authorized.propTypes = {
  onLogout: func,
}

export default Authorized
