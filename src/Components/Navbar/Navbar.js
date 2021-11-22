import React from 'react'
import styles from './Navbar.module.css'
import Dropdown from '../SharedComponents/Dropdown/Dropdown'

function Navbar() {
  const dropdown={
    aboutUs:['Guide & Help','Privacy Policy'],
    menu:['Easy Greens', 'Power Juices', 'Simply Juice','Other Products'],
    ourNews:['Simply Juice','Fresh Squeezed Juices','Power Juices',"Nature's Energy Shots"],
    myAccount:['Cart','Wishlist','Checkout','Order Tracking']
  }

    return (
        <header className={styles.siteHeader}>
         <div className={styles.container}>
           <div className={styles.brand}>
            <img alt="Brand logo" src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/cropped-logo-green.png'>
            </img>
           </div>
 
           <div className={styles.navigation}>
             <ul className={styles.navigationList}>
                 <a href='/'  className={styles.listElements}><li>HOME</li>  </a>
                 <a href='/'  className={styles.listElements}><li>ABOUT US</li>  <Dropdown data={dropdown.aboutUs}/></a>
                 <a href='/'  className={styles.listElements}><li>MENU</li> <Dropdown data={dropdown.menu}/> </a>
                 <a href='/'  className={styles.listElements}><li>ORGANIC</li></a>
                 <a href='/'  className={styles.listElements}><li>OUR NEWS</li> <Dropdown data={dropdown.ourNews}/> </a>
                 <a href='/'  className={styles.listElements}><li>MY ACCOUNT</li> <Dropdown data={dropdown.myAccount}/></a>
                 <a href='/'  className={styles.listElements}><li>CONTACT US</li></a>
             </ul>
           </div>
         </div>
        </header>
    )
}

export default Navbar
