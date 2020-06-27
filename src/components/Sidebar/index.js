import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './sidebar.module.scss'

function Sidebar({ isOpen, onCloseBtnClick }) {
  return (
    <div className={cx(styles.sidebar, { [styles.open]: isOpen })}>
      sidebar
      <button type="button" onClick={onCloseBtnClick}>Close</button>
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseBtnClick: PropTypes.func.isRequired,
}

export default Sidebar
