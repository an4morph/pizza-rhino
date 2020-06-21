import React from 'react'
import { func, node } from 'prop-types'

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
}

export default Button
