import React from 'react'
import { ThemeProvider } from 'styled-components'
import { node } from 'prop-types'

const theme = {
  sizes: {
    headerHeight: '70px',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: node,
}

export default Theme
