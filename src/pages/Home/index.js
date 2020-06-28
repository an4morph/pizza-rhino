import React from 'react'
import { object } from 'prop-types'
import PageTemplate from '../../components/PageTemplate'
import TopMenu from '../../components/TopMenu'
import Catalog from '../../components/Catalog'
import styles from './home.module.scss'

const mockPizza = [
  {
    id: '7fjh4qqA8pP',
    name: 'Margarita',
    price: 12.50,
    desc: 'Classic italian pizza with tomatos',
    ingredients: ['tomatos', 'cashew cheese', 'basil', 'rosemary'],
    tags: ['soy free'],
    imageSrc: '/images/pizza1.png',
  },
  {
    id: '7fj6jqqA8pP',
    name: 'Margarita 2',
    price: 12.50,
    desc: 'Classic italian pizza with tomatos',
    ingredients: ['tomatos', 'cashew cheese', 'basil', 'rosemary'],
    tags: ['soy free'],
    imageSrc: '/images/pizza1.png',
  },
]

function HomePage({ location }) {
  return (
    <PageTemplate>
      <TopMenu hash={location.hash.substr(1)} className={styles['top-menu']} />
      <Catalog items={mockPizza} />
    </PageTemplate>
  )
}

HomePage.propTypes = {
  location: object.isRequired,
}

export default HomePage
