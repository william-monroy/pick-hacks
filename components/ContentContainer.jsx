import React from 'react'
import styles from './ContentContainer.module.css'

const ContentContainer = ({children, style}) => {
  return (
    <div className={styles.ContentContainer} style={style}>
      {children}
    </div>
  )
}

export default ContentContainer