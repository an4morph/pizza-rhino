import React from 'react'
import cx from 'classnames'
import { string, object } from 'prop-types'
import IconButton from '../IconButton'
import Typography from '../Typography'
import ArrowBack from '../Icons/ArrowBack'
import styles from './title.module.scss'

function BackTitle({ title, subtitle, history, className }) {
  return (
    <div className={cx(styles.container, className)}>
      <IconButton
        onClick={() => history.goBack()}
        icon={<ArrowBack />}
      />
      <div className={styles.text}>
        <Typography className={styles.title} tag="h1">{title}</Typography>
        <Typography tag="h3">{subtitle}</Typography>
      </div>
    </div>
  )
}

BackTitle.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  history: object.isRequired,
  className: string,
}

export default BackTitle
