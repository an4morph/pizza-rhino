import React from 'react'
import cx from 'classnames'
import { string, oneOf, func } from 'prop-types'
import ArrowDown from '../Icons/ArrowDown'
import styles from './menu.module.scss'

function Select({ className, handleClick, activeItem, status }) {
  const btnStyles = cx({
    [className]: true,
    [styles.select]: true,
    [styles.tab_active]: status === 'active',
    [styles.tab_inactive]: status === 'inactive',
  })
  const arrowStyles = cx({
    [styles.select__arrow]: true,
    [styles.select__arrow_up]: status === 'active',
  })
  return (
    <button
      type="button"
      onClick={handleClick}
      className={btnStyles}
    >
      <span className={styles.select__text}>{activeItem}</span>
      <ArrowDown
        className={arrowStyles}
      />
    </button>
  )
}

Select.propTypes = {
  className: string,
  status: oneOf(['active', 'inactive', null]),
  handleClick: func,
  activeItem: string.isRequired,
}

export default Select
