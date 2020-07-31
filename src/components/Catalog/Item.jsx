import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'
import Typography from '../Typography'
import Button from '../Button'
import Ingredients from './Ingredients'
import Picture from './Picture'

const ItemInfo = styled.div`
  display: flex;
`
const AddToCartButton = styled(Button)`
  margin-top: 15px;
`
const RightCol = styled.div`
  margin-left: 17px;
`
const Price = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
`
const Description = styled(Typography)`
  margin: 10px 0;
`

function CatalogItem({ item, className }) {
  const handleAddToCart = () => {}
  return (
    <div className={className}>
      <ItemInfo>
        <div>
          <Picture
            src={item.imageSrc}
            alt={item.name}
          />
          <Price>{item.price.toFixed(2)}$</Price>
        </div>
        <RightCol>
          <Typography tag="h1">{item.name}</Typography>
          <Description tag="p">{item.desc}</Description>
          <Ingredients ingredients={item.ingredients} />
        </RightCol>
      </ItemInfo>
      <AddToCartButton
        onClick={handleAddToCart}
      >Add to cart
      </AddToCartButton>
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
