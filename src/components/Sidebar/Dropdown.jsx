import React, { useState } from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'
import ArrowDown from '../Icons/ArrowDown'
import Button from '../Button'
import ListItem from './ListItem'

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-size: 18px;
  &:focus {
    background-color: ${({ theme }) => theme.colors.bgFocus};
    outline: none;
  }
`
const SubMenu = styled.ul`
  width: 100%;
  margin: 0;
  padding-left: 44px;
`
const ArrowIcon = styled(ArrowDown)`
  transform: rotate(${({ $isOpen }) => ($isOpen ? '0' : '-180deg')});
  transition: all ${({ theme }) => theme.others.transitionMs};
`

function Dropdown({ mainElement, children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ListItem>
      <StyledButton naked onClick={() => setIsOpen(!isOpen)}>
        {mainElement}
        <ArrowIcon $isOpen={isOpen} />
      </StyledButton>
      {
        isOpen && (
        <SubMenu>
          {children}
        </SubMenu>
        )
      }
    </ListItem>
  )
}

Dropdown.propTypes = {
  mainElement: node.isRequired,
  children: node.isRequired,
}

export default Dropdown
