import React from 'react'
import cx from 'classnames'
import { shape, string } from 'prop-types'
import styles from './catalog.module.scss'

function CatalogItem({ item, className }) {
  return (
    <div className={cx(className, styles.item)}>
      {item.name}
    </div>
  )
}

CatalogItem.propTypes = {
  item: shape({
    id: string.isRequired,
    name: string.isRequired,
  }),
  className: string,
}

export default CatalogItem
