import React from 'react';
import styles from './NavMenu.module.css';
import { Link } from "react-scroll";

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <Link spy={true}
        activeClass={styles.active}
        smooth={true}
        offset={0}
        duration={700} to="main" className={styles.link}>Main
      </Link>
      <Link spy={true}
        activeClass={styles.active}
        smooth={true}
        offset={0}
        duration={700} to="skills" className={styles.link}>Skills
      </Link>
      <Link spy={true}
        activeClass={styles.active}
        smooth={true}
        offset={0}
        duration={700} to="projects" className={styles.link}>Projects
      </Link>
      <Link spy={true}
        activeClass={styles.active}
        smooth={true}
        offset={0}
        duration={700} to="contacts" className={styles.link}>Contacts
      </Link>
    </div>
  );
}

export default NavMenu;