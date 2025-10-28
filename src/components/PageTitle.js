import * as React from 'react'
import * as styles from '../styles/pagetitle.module.css'

export default function PageTitle({title_h1, title_h2}) {
  return (
    <div className={styles.title}>
        <h1>{title_h1}</h1>
        <h2>{title_h2}</h2>
    </div>
  )
}
