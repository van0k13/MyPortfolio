import React from 'react';
import styles from './Footer.module.css';
import Fade from 'react-reveal';


const Footer = () => {
    const miniState = [
        'https://github.com/van0k13',
        'https://www.facebook.com/profile.php?id=100001654446507',
        'https://www.instagram.com/van0k13/?hl=ru',
        'https://web.telegram.org/@kazak13v#/im'
    ]
    return (
        <div className={styles.footer}>
            <Fade right>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.top}>ivan kazak</h2>
                        <span className={styles.line}/>
                    </div>
                    <div className={styles.socials}>
                        <a href={miniState[0]}>
                            <div className={styles.img3}/>
                        </a>
                        <a href={miniState[1]}>
                            <div className={styles.img1}>
                            </div>
                        </a>
                        <a href={miniState[2]}>
                            <div className={styles.img2}>
                            </div>
                        </a>
                        <a href={miniState[3]}>
                            <div className={styles.img4}>
                            </div>
                        </a>
                    </div>
                    <div className={styles.bottom}>
                        © 2020 Ivan Inc. All Rights Reserved
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
