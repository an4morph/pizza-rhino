import React from 'react'
import { node, oneOf, string } from 'prop-types'
import styled from 'styled-components'

const Heading1 = styled.h1`
  font-size: 22px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.headingsFont};
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0;
`
const Heading2 = styled.h2`
  font-weight: 700;
  font-size: 20px;
  font-family: ${({ theme }) => theme.colors.primaryFont};
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0;
`
const Heading3 = styled.h3`
  font-weight: 500;
  font-size: 16px;
  font-family: ${({ theme }) => theme.colors.primaryFont};
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0;
`
const Small = styled.small`
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.colors.secondaryFont};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin: 0;
`
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.colors.secondaryFont};
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0;
`

function Typography({ children, tag, className }) {
  if (tag === 'h1') return <Heading1 className={className}>{children}</Heading1>
  if (tag === 'h2') return <Heading2 className={className}>{children}</Heading2>
  if (tag === 'h3') return <Heading3 className={className}>{children}</Heading3>
  if (tag === 'small') return <Small>{children}</Small>
  return <Paragraph className={className}>{children}</Paragraph>
}

Typography.propTypes = {
  children: node.isRequired,
  tag: oneOf(['h1', 'h2', 'h3', 'small', 'p']),
  className: string,
}

export default Typography
