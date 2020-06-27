import React from 'react'
import cx from 'classnames'
import { string } from 'prop-types'
import styles from './form.module.scss'

function FormError({ error = 'Unknown error', className }) {
  return (
    <div className={cx(styles['form-error'], className)}>{error}</div>
  )
}

FormError.propTypes = {
  error: string,
  className: string,
}

export default FormError
