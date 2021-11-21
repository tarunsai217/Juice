import React from 'react'
import styles from './ProductCard.module.css'

function ProductCard({name,price}) {
    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}> <img alt='product' src="https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2019/03/p3-400x400.png"></img></div>
            <div className={styles.productDetails}>
            <h3>{name}</h3>
            <span>{price}</span>    
            </div>
        </div>
    )
}

export default ProductCard
