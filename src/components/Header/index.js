import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Icons/Logo'
import MenuIcon from '../Icons/Menu'
import IconButton from '../IconButton'
import styles from './header.module.scss'

function Header({ onMenuBtnClick }) {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <IconButton
        onClick={onMenuBtnClick}
        icon={<MenuIcon />}
        transparent
        className={styles['menu-btn']}
      />
    </div>
  )
}

Header.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
}

export default Header
