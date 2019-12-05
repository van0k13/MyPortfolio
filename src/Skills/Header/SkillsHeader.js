import React from 'react';
import styles from './SkillsHeader.module.css';

function SkillsHeader() {
  return (
    <div className={styles.header}>
      <h2 className={styles.headerTitle}>My Skills</h2>
      <div className={styles.line}></div>
    </div>
  );
}

export default SkillsHeader;
