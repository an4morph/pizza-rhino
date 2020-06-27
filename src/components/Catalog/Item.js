import React from 'react'
import { shape, string } from 'prop-types'
import Typography from '../Typography'
import Button from '../Button'
import styles from './catalog.module.scss'

function CatalogItem({ item, className }) {
  const handleAddToCart = () => {}
  return (
    <div className={className}>
      <div className={styles['item-info']}>
        <div>
          <img
            className={styles.avatar}
            src={item.imageSrc}
            alt={item.name}
          />
          <div className={styles.price}>{item.price.toFixed(2)}$</div>
        </div>
        <div className={styles.right}>
          <Typography tag="h1">{item.name}</Typography>
          <Typography className={styles.desc} tag="p">{item.desc}</Typography>
          <Typography className={styles.ingredients} tag="small">
            <b>Ingredients: &nbsp;</b>
            {item.ingredients.join(', ')}
          </Typography>
        </div>
      </div>
      <Button
        className={styles.btn}
        onClick={handleAddToCart}
      >Add to cart
      </Button>
    </div>
  )
}

CatalogItem.propTypes = {
  item: shape({
    id: string.isRequired,
    name: string.isRequired,
    imageSrc: string.isRequired,
  }),
  className: string,
}

export default CatalogItem
