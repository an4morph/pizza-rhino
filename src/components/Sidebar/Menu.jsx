import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import FoodIcon from '../Icons/Food'
import BasketIcon from '../Icons/Basket'
import ListItem from './ListItem'
import Dropdown from './Dropdown'

const StyledMenu = styled.menu`
  margin: 0;
  padding: 0;
`
const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
`
const ItemText = styled.div`
  flex: 1;
  margin-left: 15px;
  text-align: left;
`

function Menu() {
  const foodMenu = (
    <>
      <FoodIcon />
      <ItemText>Food categories</ItemText>
    </>
  )
  return (
    <StyledMenu>
      <ListItem>
        <StyledNavLink to="/cart">
          <BasketIcon />
          <ItemText>Basket</ItemText>
          <Price>$212.50</Price>
        </StyledNavLink>
      </ListItem>
      <Dropdown mainElement={foodMenu}>
        <ListItem level={2}>
          Basket
        </ListItem>
      </Dropdown>
    </StyledMenu>
  )
}

Menu.propTypes = {}

export default Menu
