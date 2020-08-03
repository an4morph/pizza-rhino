import React from 'react'
import cx from 'classnames'
import BasketIcon from '../../Icons/Basket'
import ListItem from './ListItem'
import styles from './menu.module.scss'
import Dropdown from './Dropdown'
import styled from 'styled-components';
import { string } from 'prop-types'

const LiBasket = styled.li`
  font-size: 18px;
  font-weight: 700;
  list-style: none;
`;
const StyledListItem = styled(ListItem)`
  font-size: 18px;
  font-weight: 700;
`;

function SidebarMenu({className}) {
  return (
    <menu>
      <LiBasket className={className}>
        <StyledListItem
          link="/basket"
          text="Basket"
          icon={<BasketIcon />}
        >212.50$
        </StyledListItem>
        <Dropdown subMenu={[{ id: 1, text: 'Pizza', link: '/#pizza' }]} />
      </LiBasket>
    </menu>
  )
}

SidebarMenu.propTypes = {
  className: string
}

export default SidebarMenu
