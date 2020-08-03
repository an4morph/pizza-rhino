import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'

const Container = styled.li`
  width: 100%;
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
`

function ListItem({ children, className }) {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}

ListItem.propTypes = {
  children: node.isRequired,
  className: string,
}

export default ListItem
