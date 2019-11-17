import React from 'react';
import styles from './Works.module.css';
import WorksHeader from './Header/WorksHeader';
import WorksBody from './Body/WorksBody';

function Works() {
  return (
    <div className={styles.works}>
      <div className={styles.container}>
        <WorksHeader />
        <WorksBody />
      </div>
    </div>
  );
}

export default Works;
