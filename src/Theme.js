import React from 'react'
import { ThemeProvider } from 'styled-components'
import { node } from 'prop-types'

const theme = {
  colors: {
    invertMainColor: '#FFFFFF',
    iconButtonBg: '#FFFFFF',
    iconColor: '#DAD5D2',
    formBg: '#FFFFFF',
    errorColor: '#C14A4A',
  },
  sizes: {
    headerHeight: '70px',
    buttonHeight: '38px',
    borderRadius: '2px',
    catalogImageSize: '100px',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: node,
}

export default Theme
