import React from 'react'
import { string, func, node } from 'prop-types'

function Input({
  label, formName, name, value, onChange, error, ...rest
}) {
  const id = `${formName}-${name}`

  return (
    <label htmlFor={id}>
      {label && <span>{label}</span>}
      <input
        id={id}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {error && <span>{error}</span>}
    </label>
  )
}

Input.propTypes = {
  label: node,
  error: string,
  name: string.isRequired,
  formName: string.isRequired,
  value: string,
  onChange: func.isRequired,
}

export default Input
