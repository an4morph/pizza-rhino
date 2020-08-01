import React from 'react'
import { NavLink } from 'react-router-dom'
import { func, node, string } from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  border: none;
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 0;
  height: ${({ theme }) => theme.sizes.buttonHeight};
  width: 100%;
  transition: all ${({ theme }) => theme.others.transitionMs};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBgHover};
    transition: all ${({ theme }) => theme.others.transitionMs};
  }
  &:active {
    transform: scale(0.99);
  }
`
const StyledLink = styled(NavLink)`
  width: 100%;
`

function Button({ link, children, onClick, className }) {
  const btn = (
    <StyledButton
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  )
  return link
    ? <StyledLink className={className} to={link}>{btn}</StyledLink>
    : btn
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
  link: string,
}

export default Button
