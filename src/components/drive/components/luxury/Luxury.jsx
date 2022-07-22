import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
              <div className={styles.heading}>
        <h1>the coolest cars</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select one from the top splendour vehicles for stylish travel</span>
          </p>
        </div>

      </div>

      <div className={styles.container}>
        <div className={styles.card}>
            <img src="https://th.bing.com/th/id/OIP.lPrGuT81myz7DrxHnomnBwFNC7?w=300&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            <div className={styles.content}>
                <h3>Fitito</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://th.bing.com/th/id/OIP.zf5GQAQy9WjlX7b-HU3jPQHaFj?pid=ImgDet&rs=1" alt="" />
            <div className={styles.content}>
                <h3>Citroen 2CV</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://th.bing.com/th/id/R.3179c583bf425bca1abb3eed938cbc68?rik=3gc3CEzlD3TKBQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-wz9jbn0I4aY%2fUy72yRs_QtI%2fAAAAAAAAYnQ%2f-5KwCOHb_SE%2fw1200-h630-p-k-no-nu%2fFusca%2btuning.jpg&ehk=Tg8mE%2fRcWnQvyB9NLMIRKafPuZZdy4CNLrOn4i71wu0%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className={styles.content}>
                <h3>Fusca</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://th.bing.com/th/id/OIP.e4Q7JXiOgTtHaj_D7-sj9AHaFj?pid=ImgDet&rs=1" alt="" />
            <div className={styles.content}>
                <h3>Gordini</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Luxury