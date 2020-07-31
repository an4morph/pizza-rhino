import React from 'react'
import { string, arrayOf } from 'prop-types'
import styled from 'styled-components'
import Typography from '../Typography'

const Container = styled(Typography)`
  background-color: $invertMainColor;
  display: block;
  padding: 6px 8px;
`

function Ingredients({ ingredients = [] }) {
  return (
    <Container tag="small">
      <b>Ingredients: &nbsp;</b>
      {ingredients.join(', ')}
    </Container>
  )
}

Ingredients.propTypes = {
  ingredients: arrayOf(string),
}

export default Ingredients
