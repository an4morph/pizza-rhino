import React from 'react'
import cx from 'classnames'
import { node, string } from 'prop-types'
import Header from '../Header'
import Sidebar from '../Sidebar'
import styles from './page.module.scss'

function PageTemplate({ children, className }) {
  const [isOpenSidebar, setSidebarOpen] = React.useState(false)
  return (
    <>
      <Header onMenuBtnClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={isOpenSidebar} onCloseBtnClick={() => setSidebarOpen(false)} />
      <div className={cx(styles.container, className)}>{children}</div>
    </>
  )
}

PageTemplate.propTypes = {
  children: node.isRequired,
  className: string,
}

export default PageTemplate
