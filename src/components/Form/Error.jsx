import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.errorColor};
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`

function FormError({ error = 'Unknown error', className }) {
  return (
    <StyledError className={className}>{error}</StyledError>
  )
}

FormError.propTypes = {
  error: string,
  className: string,
}

export default FormError
