import React from 'react';
import styles from './Header.module.css';
import s from './NavMenu.module.css';
import {useSelector} from "react-redux";
import {Link} from "react-scroll";


const Header = () => {
    const {elements} = useSelector((state) => state.navMenu)
    const navMenuElements = elements.map(e =>
        <Link spy={true}
              activeClass={s.active}
              smooth={true}
              offset={0}
              duration={700} to={e.toGo} className={s.link}>{e.name}
        </Link>
    )
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={s.navMenu}>
                    {navMenuElements}
                </div>
            </div>
        </div>
    );
}

export default Header;