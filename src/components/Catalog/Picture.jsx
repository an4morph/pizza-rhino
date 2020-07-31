import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledPicture = styled.img`
  min-width: ${({ theme }) => theme.sizes.catalogImageSize};
  min-height: ${({ theme }) => theme.sizes.catalogImageSize};
  max-width: ${({ theme }) => theme.sizes.catalogImageSize};
  max-height: ${({ theme }) => theme.sizes.catalogImageSize};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  background-color: ${({ theme }) => theme.colors.iconColor};
`

function Picture({ src, alt }) {
  return (
    <StyledPicture
      src={src}
      alt={alt}
    />
  )
}

Picture.propTypes = {
  src: string,
  alt: string,
}

export default Picture
