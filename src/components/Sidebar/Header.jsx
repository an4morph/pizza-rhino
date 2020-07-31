import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import Logo from '../Icons/Logo'
import IconButton from '../IconButton'
import CloseIcon from '../Icons/Close'

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $headerHeight;
`
const CloseButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.iconColor};
`
const StyledLogo = styled(Logo)`
  color: ${({ theme }) => theme.colors.primaryColor};
`

function SidebarHeader({ onClose }) {
  return (
    <Container>
      <StyledLogo />
      <CloseButton
        onClick={onClose}
        icon={<CloseIcon />}
        transparent
      />
    </Container>
  )
}

SidebarHeader.propTypes = {
  onClose: func.isRequired,
}

export default SidebarHeader
