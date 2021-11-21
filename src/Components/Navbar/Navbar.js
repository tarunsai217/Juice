import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.siteHeader}>
         <div className={styles.container}>
           <div className={styles.brand}>
            <img alt="Brand logo" src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/cropped-logo-green.png'>
            </img>
           </div>
 
           <div className={styles.navigation}>
             <ul className={styles.navigationList}>
                 <a href='/'  className={styles.listElements}><li>HOME</li></a>
                 <a href='/'  className={styles.listElements}><li>ABOUT US</li></a>
                 <a href='/'  className={styles.listElements}><li>MENU</li></a>
                 <a href='/'  className={styles.listElements}><li>ORGANIC</li></a>
                 <a href='/'  className={styles.listElements}><li>OUR NEWS</li></a>
                 <a href='/'  className={styles.listElements}><li>MY ACCOUNT</li></a>
                 <a href='/'  className={styles.listElements}><li>CONTACT US</li></a>
             </ul>
           </div>
         </div>
        </header>
    )
}

export default Navbar
