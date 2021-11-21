import React from 'react'
import styles from './Card.module.css'

function Card({right,title}) {
    const leftCard={
       textAlign:'right',
       paddingLeft:'30px'
    }

    const rightCard={
    textAlign:'left',
    paddingRight:'30px'
    }

    return (
        <div className={styles.card}>
            {right && <div style={{paddingRight:'15px'}} className={styles.imageContainer}> <img alt='plant' src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/service-icon2.png'></img></div>}
            <div style={right?rightCard:leftCard} className={styles.textContainer}>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet, conc Lorem sit amet, concLorem ipsum dolor</p>
            </div>
            {!right && <div style={{paddingLeft:'25px'}} className={styles.imageContainer}> <img alt='plant' src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/service-icon2.png'></img></div>}
        </div>
    )
}

export default Card
