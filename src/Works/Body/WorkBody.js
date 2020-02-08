import React from 'react';
import styles from './WorksBody.module.css';

function WorkBody(props) {
  return (
    <div className={styles.worksBlock}>
      <a href='https://github.com/van0k13'>
        <img className={styles.worksPhotoBlock} src={props.img} alt='icon' />
      </a>
      <div className={styles.textBlock}>
          <h2 className={styles.h2Text}>{props.name}</h2>
        </div>
    </div>
  );
}

export default WorkBody;
