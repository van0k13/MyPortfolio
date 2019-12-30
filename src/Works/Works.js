import React from 'react';
import styles from './Works.module.css';
import WorksHeader from './Header/WorksHeader';
import WorksBody from './Body/WorksBody';

function Works(props) {
  
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <WorksHeader />
        <WorksBody projects={props.projects}/>
      </div>
    </div>
  );
}

export default Works;
