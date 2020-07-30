import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import IconButton from '../IconButton'
import LogoutIcon from '../Icons/Logout'
import UserIcon from '../Icons/User'
import styles from './sidebar.module.scss'

const logged = false

function AuthBlock() {
  return (
    <div className={styles.auth}>
      {
        logged
          ? (
            <NavLink to="/profile" className={styles.auth__user}>
              <UserIcon />
              <div className={styles.username}>username</div>
            </NavLink>
          )
          : <div className={styles.auth__text}>Login to receive bonuses and gifts</div>
      }
      {
        logged
          ? <IconButton icon={<LogoutIcon />} onClick={() => console.log('logout')} />
          : <Button className={styles.auth__login} link="/login">Login</Button>
      }
    </div>
  )
}

AuthBlock.propTypes = {

}

export default AuthBlock
