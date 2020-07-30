import React from 'react'
import { func, node, bool } from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ theme, transparent }) => (transparent ? 'transparent' : theme.colors.iconButtonBg)};
  border: none;
  width: ${({ theme }) => theme.sizes.buttonHeight};
  height: ${({ theme }) => theme.sizes.buttonHeight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  padding: 0;
  cursor: pointer;
  &:focus {
    box-shadow: none;
  }
`

function IconButton({ icon, onClick, transparent }) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      transparent={transparent}
    >
      {icon}
    </StyledButton>
  )
}

IconButton.propTypes = {
  onClick: func,
  icon: node.isRequired,
  transparent: bool,
}

export default IconButton
