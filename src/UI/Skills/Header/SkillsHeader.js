import React from 'react';
import styles from './SkillsHeader.module.css';

const SkillsHeader = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.headerTitle}>my skills</h2>
      <div className={styles.line}/>
    </div>
  );
}

export default SkillsHeader;
