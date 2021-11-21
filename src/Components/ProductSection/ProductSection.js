import React from 'react'
import styles from './ProductSection.module.css'
import ProductCard from '../SharedComponents/ProductCard/ProductCard'

function ProductSection() {
    return (
        <div className={styles.productSection}>
            <div className={styles.options}>
                <button>Feautured</button>
                <button>Latest</button>
                <button>BestSeller</button>
            </div>
            <div className={styles.productContainer}>
             <ProductCard name="Beet Sunrise" price="$60.89"/>
             <ProductCard name="Blueberry Smash" price="$31.89 - $41.89"/>
             <ProductCard name="Bulk Upper" price="40.78"/>
             <ProductCard name="Lemon Apple Kale" price="$150 -$200"/>
            </div>
        </div>
    )
}

export default ProductSection
