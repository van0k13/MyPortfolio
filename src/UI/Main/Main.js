import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div id='main' className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <h3 className={styles.profileStatush3}>Hello buddy!</h3>
          <h1 className={styles.profileStatush1}>I am <span>React developer</span></h1>
          <h3 className={styles.profileStatush3}>Enjoy my potrfolio</h3>
        </div>
        <div className={styles.photo}>
          <div className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Main;
