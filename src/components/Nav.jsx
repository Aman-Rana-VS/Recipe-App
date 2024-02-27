import React from 'react'
import styles from './nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={styles.nav}>
        Food App 🍔
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }>Home</NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }>About</NavLink>
          </li>
          <li className={styles.listItem}> 
            <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }>Recipes</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Nav