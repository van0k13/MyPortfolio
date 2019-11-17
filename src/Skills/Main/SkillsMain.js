import React from 'react';
import styles from './SkillsMain.module.css';

function SkillsMain() {
  return (
    <div className={styles.main}>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto1}>

        </div>
        <h2>Speed</h2>
        <span>skill description</span>
      </div>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto2}>

        </div>
        <h2>Strength</h2>
        <span>skill description</span>
      </div>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto3}>

        </div>
        <h2>Guitarability</h2>
        <span>skill description</span>
      </div>
    </div>
  );
}

export default SkillsMain;
