import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../Icons/Logo'
import MenuIcon from '../Icons/Menu'
import IconButton from '../IconButton'

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBg};
  box-shadow: ${({ theme }) => theme.others.headerShadow};
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes.headerHeight};
`
const StyledIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.iconColor};
`
const StyledLogo = styled(Logo)`
  color: ${({ theme }) => theme.colors.primaryColor};
`

function Header({ onMenuBtnClick }) {
  return (
    <StyledHeader>
      <StyledLogo />
      <StyledIconButton
        onClick={onMenuBtnClick}
        icon={<MenuIcon />}
        transparent
      />
    </StyledHeader>
  )
}

Header.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
}

export default Header
