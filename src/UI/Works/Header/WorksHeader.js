import React from 'react';
import styles from './WorksHeader.module.css';

function WorksHeader() {
  return (
    <div className={styles.header}>
      <h2 className={styles.headerTitle}>my projecs</h2>
      <div className={styles.line}></div>
    </div>
  );
}

export default WorksHeader;