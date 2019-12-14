import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <div className={styles.textAndLine}>
          <h2 className={styles.text}>Looking For Some Freelancing</h2>
          <span className={styles.line}></span>
        </div>
        <div className={styles.button}>
          <button className={styles.sloganButton}>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
