import React from 'react'
import cx from 'classnames'
import { node, string, oneOf } from 'prop-types'
import styles from './typo.module.scss'

function Typography({ children, className, tag }) {
  const currentClassName = cx(styles[tag], className)
  if (tag === 'h1') return <h1 className={currentClassName}>{children}</h1>
  if (tag === 'h2') return <h2 className={currentClassName}>{children}</h2>
  if (tag === 'h3') return <h3 className={currentClassName}>{children}</h3>
  if (tag === 'small') return <small className={currentClassName}>{children}</small>
  return (
    <p className={currentClassName}>{children}</p>
  )
}

Typography.propTypes = {
  children: node.isRequired,
  className: string,
  tag: oneOf(['h1', 'h2', 'h3', 'small', 'p']),
}

export default Typography
