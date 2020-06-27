import React, { useState } from 'react'
import { string } from 'prop-types'
import ArrowDown from '../Icons/ArrowDown'
import CategoriesList from './CategoriesList'
import styles from './menu.module.scss'

function TopMenu({ className }) {
  const [activeTab, setActiveTab] = useState(null)
  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setActiveTab(activeTab === 'categories' ? null : 'categories')}
        className={styles.select}
      >
        Select
        <ArrowDown />
      </button>
      <button
        type="button"
        onClick={() => setActiveTab(activeTab === 'filter' ? null : 'filter')}
        className={styles.select}
      >
        filter
      </button>
      {
        activeTab && (
          <div className={styles.result}>
            {activeTab === 'categories' && <CategoriesList />}
            {activeTab === 'filter' && <div>filter</div>}
          </div>
        )
      }
    </div>
  )
}

TopMenu.propTypes = {
  className: string,
}

export default TopMenu
