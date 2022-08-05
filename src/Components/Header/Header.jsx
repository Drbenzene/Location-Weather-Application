import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className="flex justify-center text-3xl bold items-center" id={styles.header}>
    Welcome to the Weather App
    </div>
  )
}

export default Header