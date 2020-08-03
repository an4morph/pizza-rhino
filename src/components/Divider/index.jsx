import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const StyledDivider = styled.div`
  background-color: ${({ theme }) => theme.colors.siteBg};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  width: 100%;
  height: 1px;
`

function Divider({ className }) {
  return (
    <StyledDivider className={className} />
  )
}

Divider.propTypes = {
  className: string,
}

export default Divider
