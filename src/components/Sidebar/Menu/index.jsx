import React from 'react'
import cx from 'classnames'
import BasketIcon from '../../Icons/Basket'
import ListItem from './ListItem'
import styles from './menu.module.scss'
import Dropdown from './Dropdown'

function SidebarMenu() {
  return (
    <menu>
      <li className={cx(styles.basket, styles.li_category)}>
        <ListItem
          link="/basket"
          className={styles.basket}
          text="Basket"
          icon={<BasketIcon />}
        >212.50$
        </ListItem>
        <Dropdown subMenu={[{ id: 1, text: 'Pizza', link: '/#pizza' }]} />
      </li>
    </menu>
  )
}

SidebarMenu.propTypes = {}

export default SidebarMenu
