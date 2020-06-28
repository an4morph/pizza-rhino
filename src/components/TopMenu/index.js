import React, { useReducer } from 'react'
import cx from 'classnames'
import { string } from 'prop-types'
import FilterIcon from '../Icons/Filter'
import IconButton from '../IconButton'
import CategoriesList from './CategoriesList'
import styles from './menu.module.scss'
import Select from './Select'

function TopMenu({ className, category }) {
  const changeStatus = (tab, current = false) => {
    const nextStatus = current ? 'active' : 'inactive'
    return (!tab || tab === 'inactive') ? nextStatus : null
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'CATEGORY_TAB_CLICK':
        return {
          isOpen: state.categoryTab !== 'active',
          categoryTab: changeStatus(state.categoryTab, true),
          filterTab: changeStatus(state.categoryTab),
        }
      case 'FILTER_TAB_CLICK':
        return {
          isOpen: state.filterTab !== 'active',
          filterTab: changeStatus(state.filterTab, true),
          categoryTab: changeStatus(state.filterTab),
        }
      default:
        throw new Error()
    }
  }
  const initialState = { isOpen: false, categoryTab: null, filterTab: null }
  const [state, dispatch] = useReducer(reducer, initialState)

  const filterStyles = cx({
    [styles.filter_btn]: true,
    [styles.tab_active]: state.filterTab === 'active',
    [styles.tab_inactive]: state.filterTab === 'inactive',
  })

  return (
    <div className={className}>
      <div className={styles.tabs}>
        <Select
          handleClick={() => dispatch({ type: 'CATEGORY_TAB_CLICK' })}
          activeItem={category}
          status={state.categoryTab}
        />
        <IconButton
          className={filterStyles}
          onClick={() => dispatch({ type: 'FILTER_TAB_CLICK' })}
          icon={<FilterIcon />}
        />
      </div>
      {
        state.isOpen && (
        <div className={styles.result}>
          {state.categoryTab === 'active' && (
            <CategoriesList
              active={category}
            />
          )}
          {state.filterTab === 'active' && <div>filter</div>}
        </div>
        )
      }
    </div>
  )
}

TopMenu.propTypes = {
  className: string,
  category: string.isRequired,
}

export default TopMenu
