import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'
import CatalogItem from './Item'

const StyledCatalogItem = styled(CatalogItem)`
  margin-bottom: 40px;
`

function Catalog({ items }) {
  return items.map((item) => (
    <StyledCatalogItem
      key={item.id}
      item={item}
    />
  ))
}

Catalog.propTypes = {
  items: arrayOf(shape({
    id: string.isRequired,
  })),
}

export default Catalog
