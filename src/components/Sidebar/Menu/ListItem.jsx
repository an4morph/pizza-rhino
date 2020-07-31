import React from 'react'
import cx from 'classnames'
import { string, node, bool } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './menu.module.scss'

function ListItem({ link, text, icon, className, children, divider = true }) {
  const element = (
    <>
      <div className={cx(styles.list_item_text, className)}>
        <div className={styles.list_icon}>{icon}</div>
        <div className={styles.text}>{text}</div>
        {children}
      </div>
      {divider && <div className={styles.divider} />}
    </>
  )
  return link ? <NavLink to={link}>{element}</NavLink> : element
}

ListItem.propTypes = {
  className: string,
  link: string,
  text: string,
  icon: node,
  children: node,
  divider: bool,
}

export default ListItem
