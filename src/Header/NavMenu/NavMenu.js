import React from 'react';
import styles from './NavMenu.module.css';
import {NavLink} from 'react-router-dom';

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <NavLink to='main' className={styles.link}>Main</NavLink>
      <NavLink to='skills' className={styles.link}>Skills</NavLink>
      <NavLink to='projects' className={styles.link}>Projects</NavLink>
      <NavLink to='contacts' className={styles.link}>Contacts</NavLink>
    </div>
  );
}

export default NavMenu;