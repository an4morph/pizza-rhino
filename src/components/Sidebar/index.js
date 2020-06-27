import React from 'react'
import { bool, func } from 'prop-types'
import cx from 'classnames'
import Logo from '../Icons/Logo'
import IconButton from '../IconButton'
import CloseIcon from '../Icons/Close'
import AuthBlock from './AuthBlock'
import Menu from './Menu'
import styles from './sidebar.module.scss'

function Sidebar({ isOpen, onCloseBtnClick }) {
  return (
    <div className={cx(styles.sidebar, { [styles.open]: isOpen })}>
      <div className={styles.head}>
        <Logo className={styles.logo} />
        <IconButton
          onClick={onCloseBtnClick}
          icon={<CloseIcon />}
          transparent
          className={styles['close-btn']}
        />
      </div>
      <div className={styles.content}>
        <AuthBlock />
        <Menu />
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: bool.isRequired,
  onCloseBtnClick: func.isRequired,
}

export default Sidebar
