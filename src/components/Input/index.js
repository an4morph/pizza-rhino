import React from 'react'
import cx from 'classnames'
import { string, func, node } from 'prop-types'
import styles from './input.module.scss'

function Input({
  label, formName, name, value, onChange, error = '', className, ...rest
}) {
  const id = `${formName}-${name}`

  return (
    <label htmlFor={id} className={cx(styles.container, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={cx(styles.input, { [styles['input-error']]: error })}
        id={id}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  )
}

Input.propTypes = {
  label: node,
  error: string,
  name: string.isRequired,
  formName: string.isRequired,
  value: string,
  className: string,
  onChange: func.isRequired,
}

export default Input
