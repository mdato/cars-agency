import React from 'react'
import styles from './Driver.module.css';
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img className='auto' src={Drive} alt="/" />
        </div>
        <div>
            <h2>Find the car of your <span>dreams</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium expedita voluptatibus, error deleniti libero perferendis quas ad, minima inventore debitis repellendus quod ducimus doloribus ratione optio voluptatem consequatur delectus!</p>
            <button>Find your car</button>
        </div>
    </div>
  )
}

export default Driver