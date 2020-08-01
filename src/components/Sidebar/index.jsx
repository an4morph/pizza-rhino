import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'
import SidebarHeader from './Header'
import AuthBlock from '../AuthBlock'
import Menu from './Menu'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.sidebarBg};
  position: fixed;
  bottom: 0;
  top: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : '-100%')});
  transition: all .4s;
  will-change: transform;
`
const Content = styled.div`
  padding: 0 15px;
`

function Sidebar({ isOpen, onCloseBtnClick }) {
  return (
    <Container isOpen={isOpen}>
      <SidebarHeader onClose={onCloseBtnClick} />
      <Content>
        <AuthBlock isLogged />
        <Menu />
      </Content>
    </Container>
  )
}

Sidebar.propTypes = {
  isOpen: bool.isRequired,
  onCloseBtnClick: func.isRequired,
}

export default Sidebar
