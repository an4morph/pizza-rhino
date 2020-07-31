import React, { useState } from 'react'
import cx from 'classnames'
import { arrayOf, object } from 'prop-types'
import { NavLink } from 'react-router-dom'
import ListItem from './ListItem'
import IconButton from '../../IconButton'
import ArrowIcon from '../../Icons/ArrowDown'
import FoodIcon from '../../Icons/Food'
import styles from './menu.module.scss'

function Dropdown({ subMenu = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      aria-hidden="true"
      className={styles.dropdown}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ListItem text="Food categories" icon={<FoodIcon />}>
        <IconButton
          icon={<ArrowIcon />}
          transparent
          className={cx(styles.arrow, { [styles.arrow_up]: isOpen })}
        />
      </ListItem>
      {
          isOpen && (
          <ul>
            {
              subMenu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    activeClassName={styles.active_link}
                    className={styles.link}
                    to={item.link}
                    exact
                  >{item.text}
                  </NavLink>
                  <div className={styles.divider} />
                </li>
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
