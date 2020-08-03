import React, { useState } from 'react'
import { arrayOf, object } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ListItem from './ListItem'
import IconButton from '../../IconButton'
import ArrowIcon from '../../Icons/ArrowDown'
import FoodIcon from '../../Icons/Food'

const ArrowButton = styled(IconButton)`
  transition: all ${({ theme }) => theme.others.transitionMs};
  transform: rotate(${({ up }) => (up ? 180 : 0)}deg);
`
const Divider = styled.div`
  background-color: $menuDivider;
  border-radius: 2px;
  height: 1px;
  width: 100%;
`
const StyledLink = styled(NavLink)`
  padding: 7px 15px;
  display: block;
`
const StyledLi = styled.li`
  font-weight: 400;
  font-size: 16px;
`

function Dropdown({ subMenu = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      aria-hidden="true"
      onClick={() => setIsOpen(!isOpen)}
    >
      <ListItem text="Food categories" icon={<FoodIcon />}>
        <ArrowButton
          icon={<ArrowIcon />}
          transparent
          up={isOpen}
        />
      </ListItem>
      {
          isOpen && (
          <ul>
            {
              subMenu.map((item) => (
                <StyledLi key={item.id}>
                  <StyledLink
                    to={item.link}
                    exact
                  >{item.text}
                  </StyledLink>
                  <Divider />
                </StyledLi>
              ))
          }
          </ul>
          )
      }
    </div>
  )
}

Dropdown.propTypes = {
  subMenu: arrayOf(object),
}

export default Dropdown
