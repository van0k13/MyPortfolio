import React from 'react';
import styles from './SkillsMain.module.css';

function SkillMain(props) {
  return (
    <div className={styles.skillName}>
      <div className={styles.skillPhoto1}>
        <div className={styles.photoBack}>
        </div>
        <img src={props.img} alt='description' />
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.textStylization}>{props.name}</h2>
        <span className={styles.textStylization}>{props.text}</span>
      </div>
    </div>
  );
}

export default SkillMain;
