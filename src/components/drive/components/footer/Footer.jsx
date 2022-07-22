import React from 'react'
import dream from '../../images/dreams.jpg'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container} >
            {/*<img src={Logo} alt="" />*/}
            <img src={dream} alt="" />
            <button>Car Agency</button>
        </div>
    </div>
  )
}

export default Footer