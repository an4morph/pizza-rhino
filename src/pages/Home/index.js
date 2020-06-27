import React from 'react'
import PageTemplate from '../../components/PageTemplate'
import TopMenu from '../../components/TopMenu'
import Catalog from '../../components/Catalog'

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

function HomePage() {
  return (
    <PageTemplate>
      <TopMenu />
      <Catalog items={mockPizza} />
    </PageTemplate>
  )
}

export default HomePage
