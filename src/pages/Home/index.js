import React, { useEffect } from 'react'
import { object } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import PageTemplate from '../../components/PageTemplate'
import TopMenu from '../../components/TopMenu'
import Catalog from '../../components/Catalog'
import { getPizzaAction } from '../../store/actions/catalog'
import styles from './home.module.scss'

function HomePage({ location }) {
  const dispatch = useDispatch()
  const pizza = useSelector((state) => state.catalog.pizza)

  useEffect(() => {
    dispatch(getPizzaAction())
  }, [dispatch])

  return (
    <PageTemplate>
      <TopMenu hash={location.hash.substr(1)} className={styles['top-menu']} />
      <Catalog items={pizza} />
    </PageTemplate>
  )
}

HomePage.propTypes = {
  location: object.isRequired,
}

export default HomePage
