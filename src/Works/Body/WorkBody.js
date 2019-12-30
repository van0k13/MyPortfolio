import React from 'react';
import styles from './WorksBody.module.css';

function WorkBody(props) {
  return (
      <div className={styles.worksBlock}>
        <div className={styles.worksPhotoBlock}>
          <img src={props.img} alt='icon' />
        </div>
        <button className={styles.worksButton}>
          <span>Open</span>
        </button>
        <h2 className={styles.spanText}>{props.name}</h2>
        <span className={styles.spanText}>{props.text}</span>
      </div>
  );
}

export default WorkBody;
