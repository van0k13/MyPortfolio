import React from 'react';
import styles from './WorksBody.module.css';

function WorkBody(props) {
  return (
      <div className={styles.worksBlock}>
        <div >
          <img className={styles.worksPhotoBlock} src={props.img} alt='icon' />
        </div>
        <button className={styles.worksButton}>
          <span>Open</span>
        </button>
        <h2 className={styles.h2Text}>{props.name}</h2>
        <span className={styles.spanText}>{props.text}</span>
      </div>
  );
}

export default WorkBody;
