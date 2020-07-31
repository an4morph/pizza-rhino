import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.errorColor};
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`

function FormError({ error = 'Unknown error' }) {
  return (
    <StyledError>{error}</StyledError>
  )
}

FormError.propTypes = {
  error: string,
}

export default FormError
