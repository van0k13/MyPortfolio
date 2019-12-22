import React from 'react';
import styles from './WorksBody.module.css';

function WorksBody() {
  return (
    <div className={styles.main}>
      <div className={styles.worksName}>
        <div className={styles.worksPhoto1}>
          <button className={styles.worksButton}>
            <span>Enlarge</span></button>
        </div>
        <h2 className={styles.spanText}>Portfolio</h2>
        <span className={styles.spanText}>skill description and skill description and
        skill description and skill description
        </span>
      </div>
      <div className={styles.worksName}>
        <div className={styles.worksPhoto2}>
          <button className={styles.worksButton}><span>Enlarge</span></button>
        </div>
        <h2 className={styles.spanText}>Social page</h2>
        <span className={styles.spanText}>skill description and skill description and
        skill description and skill description
        </span>
      </div>
      <div className={styles.worksName}>
        <div className={styles.worksPhoto3}>
          <button className={styles.worksButton}><span>Enlarge</span></button>
        </div>
        <h2 className={styles.spanText}>TodoList</h2>
        <span className={styles.spanText}>skill description and skill description and
        skill description and skill description
        </span>
      </div>
    </div>
  );
}

export default WorksBody;
