import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <h2>Looking For Some Freelancing</h2>
        <div className={styles.button}>
          <button className={styles.sloganButton}>Contact Me</button>
        </div>
      </div>
      
    </div>
  );
}

export default Slogan;
