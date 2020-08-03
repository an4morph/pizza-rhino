import React from 'react'
import { node, oneOf } from 'prop-types'
import styled from 'styled-components'

const Container = styled.li`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: ${({ level }) => (level === 1 ? '12px' : '6px')};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  font-size: ${({ level }) => (level === 1 ? '18px' : '16px')};
`

function ListItem({ children, level = 1 }) {
  return (
    <Container level={level}>
      {children}
    </Container>
  )
}

ListItem.propTypes = {
  children: node.isRequired,
  level: oneOf([1, 2]),
}

export default ListItem
