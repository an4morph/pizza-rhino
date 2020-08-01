import React from 'react'
import { NavLink } from 'react-router-dom'
import { func, node, string } from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  height: ${({ theme }) => theme.sizes.buttonHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  border: none;
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 0;
  transition: all ${({ theme }) => theme.others.transitionMs};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBgHover};
    transition: all ${({ theme }) => theme.others.transitionMs};
  }
  &:active {
    transform: scale(0.99);
  }
`

function Button({ link, children, onClick, className }) {
  return (
    <StyledButton
      as={link ? NavLink : 'button'}
      to={link}
      type={!link && 'button'}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
  link: string,
}

export default Button
