import React from 'react'
import { string } from 'prop-types'

function TopMenu({ className }) {
  return (
    <div className={className}>
      top menu
    </div>
  )
}

TopMenu.propTypes = {
  className: string,
}

export default TopMenu
