import React from 'react'
import { NavLink } from 'react-router-dom'
import { func, node, string } from 'prop-types'
import cx from 'classnames'
import styles from './button.module.scss'

function Button({ link, children, onClick, className }) {
  const getButton = (clsName) => (
    <button
      type="button"
      onClick={onClick}
      className={clsName}
    >
      {children}
    </button>
  )
  return link
    ? <NavLink className={cx(styles.link, className)} to={link}>{getButton(styles.button)}</NavLink>
    : getButton(cx(styles.button, className))
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
  link: string,
}

export default Button
