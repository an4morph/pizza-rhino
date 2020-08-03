import React from 'react'
import { string, node, bool } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 12px 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
`
const Divider = styled.div`
  background-color: $menuDivider;
  border-radius: 2px;
  height: 1px;
  width: 100%;
`
const Icon = styled.i`
  margin-right: 15px;
  display: inherit;
`
const Text = styled.div`
  flex: 1;
`

function ListItem({ link, text, icon, className, children, divider = true }) {
  const element = (
    <>
      <Container className={className}>
        <Icon>{icon}</Icon>
        <Text>{text}</Text>
        {children}
      </Container>
      {divider && <Divider />}
    </>
  )
  return link ? <NavLink to={link}>{element}</NavLink> : element
}

ListItem.propTypes = {
  className: string,
  link: string,
  text: string,
  icon: node,
  children: node,
  divider: bool,
}

export default ListItem
