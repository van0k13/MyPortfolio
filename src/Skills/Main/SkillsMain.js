import React from 'react';
import styles from './SkillsMain.module.css';

function SkillsMain() {
  return (
    <div className={styles.main}>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto1}>

        </div>
        <h2 className={styles.textStylization}>React</h2>
        <span className={styles.textStylization}>vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim</span>
      </div>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto2}>

        </div>
        <h2 className={styles.textStylization}>{'CSSandJS'}</h2>
        <span className={styles.textStylization}>vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim</span>
      </div>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto3}>

        </div>
        <h2 className={styles.textStylization}>HTMLandJSX</h2>
        <span className={styles.textStylization}>vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim</span>
      </div>
    </div>
  );
}

export default SkillsMain;
