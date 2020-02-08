import React from 'react';
import styles from './Slogan.module.css';
import Fade from 'react-reveal/Fade'

function Slogan() {
  return (
    <div className={styles.slogan}>
      <Fade bottom>
      <div className={styles.container}>
        <div className={styles.textAndLine}>
          <h2 className={styles.text}>looking for some freelancing</h2>
          <span className={styles.line}></span>
        </div>
        <div className={styles.button}>
          <button className={styles.worksButton}><span>contact me</span></button>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Slogan;
