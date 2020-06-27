import React from 'react'
import cx from 'classnames'
import { arrayOf, shape, string } from 'prop-types'
import CatalogItem from './Item'
import styles from './catalog.module.scss'

function Catalog({ items, className }) {
  return (
    <div className={cx(styles.catalog, className)}>
      {
        items.map((item) => (
          <CatalogItem
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}

Catalog.propTypes = {
  items: arrayOf(shape({
    id: string.isRequired,
  })),
  className: string,
}

export default Catalog
