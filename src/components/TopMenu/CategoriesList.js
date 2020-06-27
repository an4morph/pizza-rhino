import React, { useState } from 'react'
import { string } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './menu.module.scss'

const categories = [
  { link: '/pizza', text: 'Pizza' },
  { link: '/drinks', text: 'Drinks' },
  { link: '/salads', text: 'Salads' },
]

function CategoriesList({ className }) {
  return (
    <div className={className}>
      {
        categories.map((cat) => (
          <NavLink
            to={cat.link}
            key={cat.text}
            className={styles.catLink}
          >{cat.text}
          </NavLink>
        ))
      }
    </div>
  )
}

CategoriesList.propTypes = {
  className: string,
}

export default CategoriesList
