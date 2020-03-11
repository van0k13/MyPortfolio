import React from 'react';
import styles from './WorksBody.module.css';

function WorkBody(props) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.img} alt='icon' />
      <div className={styles.overlay}>
        <div href={props.site} className={styles.text}>
          {props.name}<div>
            <a href={`${props.site}`}>
              view code
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkBody;
