import React from 'react'
import cx from 'classnames'
import { node, string, func, bool } from 'prop-types'
import Button from '../Button'
import FormError from './Error'
import styles from './form.module.scss'

function Form({ children, className, onSubmit, buttonText = 'submit',
  submitFailed, submitting, error = 'Unknown error', title,
}) {
  return (
    <form className={cx(styles.form, className)}>
      {title}
      <div>{children}</div>
      {submitFailed && <FormError className={styles.error} error={error} />}
      <Button
        className={styles.btn}
        disabled={submitting}
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </form>
  )
}

Form.propTypes = {
  children: node.isRequired,
  className: string,
  onSubmit: func,
  buttonText: string,
  submitFailed: bool,
  submitting: bool,
  error: string,
  title: node,
}

export default Form
