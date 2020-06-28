import React, { useEffect } from 'react'
import { object } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import PageTemplate from '../../components/PageTemplate'
import TopMenu from '../../components/TopMenu'
import Catalog from '../../components/Catalog'
import { getCatalog } from '../../store/actions/catalog'
import styles from './home.module.scss'

const DEFAULT_CATEGORY = 'pizza'

function HomePage({ location }) {
  const dispatch = useDispatch()
  const catalog = useSelector((state) => state.catalog)
  const category = location.hash.substr(1) || DEFAULT_CATEGORY

  useEffect(() => {
    dispatch(getCatalog(category))
  }, [category, dispatch])

  return (
    <PageTemplate>
      <TopMenu
        category={category}
        className={styles['top-menu']}
      />
      <Catalog items={catalog[category]} />
    </PageTemplate>
  )
}

HomePage.propTypes = {
  location: object.isRequired,
}

export default HomePage
