import React from 'react'
import { ThemeProvider } from 'styled-components'
import { node } from 'prop-types'

const theme = {
  colors: {
    mainColor: '#2F2C2B',
    buttonBg: '#2F2C2B',
    buttonBgHover: '#3c3836',
    buttonText: '#FFFFFF',
    invertMainColor: '#FFFFFF',
    iconButtonBg: '#FFFFFF',
    iconColor: '#DAD5D2',
    formBg: '#FFFFFF',
    errorColor: '#C14A4A',
    sidebarBg: '#FFFFFF',
    primaryColor: '#E09165',
    textColor: '#2F2C2B',
    secondaryTextColor: '#777676',
    siteBg: '#F5F5F5',
    linkColor: '#65A5E0',
    tabsBg: '#FFFFFF',
    menuDivider: '#F5F5F5',
    headerBg: '#FFFFFF',
  },
  sizes: {
    headerHeight: '70px',
    buttonHeight: '38px',
    borderRadius: '2px',
    catalogImageSize: '100px',
    inputHeight: '38px',
  },
  fonts: {
    secondaryFont: "'Raleway', sans-serif",
    primaryFont: "'Rubik', sans-serif",
    headingsFont: "'Rubik Mono One', sans-serif",
  },
  others: {
    outline: '2px solid #65A5E0',
    headerShadow: '0px 0px 10px rgba(#2F2C2B, 0.15)',
    transitionMs: '0.3s',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: node,
}

export default Theme
