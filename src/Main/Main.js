import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <h3>Привет!</h3>
          <h3>Меня зовут Ванёк</h3>
          <h3>И я Reactogolik</h3>
        </div>
        <div className={styles.photo}>
         <img/>
        </div>      
      </div>
    </div>
  );
}

export default Main;
