import React from 'react'
import { func, node, string, bool } from 'prop-types'
import cx from 'classnames'
import styles from './button.module.scss'

function IconButton({ icon, onClick, className, transparent }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.button, className, { [styles.transparent]: transparent })}
    >
      {icon}
    </button>
  )
}

IconButton.propTypes = {
  onClick: func,
  icon: node.isRequired,
  className: string,
  transparent: bool,
}

export default IconButton
