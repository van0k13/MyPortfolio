import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Привет!</span>
          <span>Меня зовут Ванёк</span>
          <span>И я алкоголик</span>
        </div>
        <div className={styles.photo}>
         <img/>
        </div>      
      </div>
    </div>
  );
}

export default Main;
