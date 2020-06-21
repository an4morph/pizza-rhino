import React from 'react'
import { node, string } from 'prop-types'

function PageTemplate({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

PageTemplate.propTypes = {
  children: node.isRequired,
  className: string,
}

export default PageTemplate
