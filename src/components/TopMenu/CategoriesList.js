import React from 'react'
import { string } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './menu.module.scss'

const categories = [
  { link: '#pizza', text: 'pizza' },
  { link: '#drinks', text: 'drinks' },
  { link: '#salads', text: 'salads' },
]

function CategoriesList({ className, active }) {
  return (
    <div className={className}>
      {
        categories.map((cat) => (
          <NavLink
            to={cat.link}
            key={cat.text}
            className={active !== cat.text ? styles.catLink : styles.activeCatLink}
          >{cat.text}
          </NavLink>
        ))
      }
    </div>
  )
}

CategoriesList.propTypes = {
  className: string,
  active: string.isRequired,
}

export default CategoriesList
