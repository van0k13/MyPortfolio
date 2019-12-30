import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.top}>ivan kazak</h2>
          <span className={styles.line}></span>
        </div>
        <div className={styles.socials}>
          <div className={styles.img1}>
          </div>
          <div className={styles.img2}>
          </div>
          <div className={styles.img3}>
          </div>
        </div>
        <div className={styles.bottom}>
          © 2019 Ivan Inc. All Rights Reserved
        </div>
      </div>

    </div>
  );
}

export default Footer;
