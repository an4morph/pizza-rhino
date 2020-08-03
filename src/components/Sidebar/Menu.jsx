import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import FoodIcon from '../Icons/Food'
import BasketIcon from '../Icons/Basket'
import ListItem from './ListItem'
import Dropdown from './Dropdown'
import Divider from '../Divider'

const StyledMenu = styled.menu`
  margin: 0;
  padding: 0;
`
const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`
const activeClassName = 'active'
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  width: 100%;
  &.${activeClassName} {
    font-weight: 700;
  }
`
const MenuLink = styled(StyledLink)`
  padding: 12px;
  font-size: 18px;
`
const SubMenuLink = styled(StyledLink)`
  padding: 6px;
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
        <MenuLink to="/cart">
          <BasketIcon />
          <ItemText>Basket</ItemText>
          <Price>$212.50</Price>
        </MenuLink>
        <Divider />
      </ListItem>
      <Dropdown mainElement={foodMenu}>
        <SubMenuLink exact to="/#pizza">
          Pizza
        </SubMenuLink>
        <Divider />
        <SubMenuLink exact to="/#drinks">
          Drinks
        </SubMenuLink>
        <Divider />
        <SubMenuLink exact to="/profile">
          Profile
        </SubMenuLink>
      </Dropdown>
    </StyledMenu>
  )
}

Menu.propTypes = {}

export default Menu
