import React, { useState } from 'react'
import cx from 'classnames'
import { string } from 'prop-types'
import ArrowDown from '../Icons/ArrowDown'
import FilterIcon from '../Icons/Filter'
import IconButton from '../IconButton'
import CategoriesList from './CategoriesList'
import styles from './menu.module.scss'

const categories = ['pizza', 'drinks', 'salads']

function TopMenu({ className, hash, onChangeCategory }) {
  const [activeTab, setActiveTab] = useState(null)
  const changeActive = (tab) => setActiveTab(activeTab === tab ? null : tab)
  const getTabStyles = (tab) => cx({
    [styles[`${tab}-tab`]]: true,
    [styles.active]: activeTab && activeTab === tab,
    [styles.inactive]: activeTab && activeTab !== tab,
  })

  const activeCategory = categories.includes(hash) ? hash : null

  return (
    <div className={className}>
      <div className={styles.tabs}>
        <button
          type="button"
          onClick={() => changeActive('categories')}
          className={getTabStyles('categories')}
        >
          <span className={styles['categories-tab-text']}>{activeCategory}</span>
          <ArrowDown className={cx(styles.arrow, { [styles['arrow-up']]: activeTab && activeTab === 'categories' })} />
        </button>
        <IconButton
          className={getTabStyles('filter')}
          onClick={() => changeActive('filter')}
          icon={<FilterIcon />}
        />
      </div>
      {
        activeTab && (
          <div className={styles.result}>
            {activeTab === 'categories' && (
              <CategoriesList
                onChangeCategory={onChangeCategory}
                hash={hash}
              />
            )}
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
