import React from 'react'
import styles from './Dropdown.module.css'
function Dropdown({data}) {
    return (
    <ul className={styles.dropdownList}>
     {data.map((el)=>{return <li className={styles.dropdownListItem}>{el}</li>})}
    </ul>
    )
}

export default Dropdown
