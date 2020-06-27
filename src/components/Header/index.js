import React from 'react'
import PropTypes from 'prop-types'
import styles from './header.module.scss'

function Header({ onMenuBtnClick }) {
  return (
    <div className={styles.header}>
      <div className="logo">Logo</div>
      <button type="button" onClick={onMenuBtnClick}>Open</button>
    </div>
  )
}

Header.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
}

export default Header
