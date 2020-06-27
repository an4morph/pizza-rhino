import React from 'react'
import { func, node, string } from 'prop-types'
import cx from 'classnames'
import styles from './button.module.scss'

function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.button, className)}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
}

export default Button
