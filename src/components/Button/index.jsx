import React from 'react'
import { NavLink } from 'react-router-dom'
import { func, node, string, bool } from 'prop-types'
import styled from 'styled-components'

const NakedButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
`
const PrimaryButton = styled(NakedButton)`
  height: ${({ theme }) => theme.sizes.buttonHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  color: ${({ theme }) => theme.colors.buttonText};
  transition: all ${({ theme }) => theme.others.transitionMs};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBgHover};
    transition: all ${({ theme }) => theme.others.transitionMs};
  }
  &:active {
    transform: scale(0.99);
  }
`

function Button({ link, naked = false, children, onClick, className }) {
  const requiredProps = {
    as: link ? NavLink : 'button',
    to: link,
    type: !link ? 'button' : null,
    onClick,
    className,
  }
  const ButtonComponent = naked ? NakedButton : PrimaryButton
  return <ButtonComponent {...requiredProps}>{children}</ButtonComponent>
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
  link: string,
  naked: bool,
}

export default Button
