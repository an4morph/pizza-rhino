import React from 'react'
import { ThemeProvider } from 'styled-components'
import { node } from 'prop-types'

const theme = {
  colors: {
    iconButtonBg: '#FFFFFF',
  },
  sizes: {
    headerHeight: '70px',
    buttonHeight: '38px',
    borderRadius: '2px',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: node,
}

export default Theme
