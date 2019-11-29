import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <h2 className={styles.profileStatus}>Привет!<br/>
          Меня зовут Ванёк<br/>
          И я Reactogolik</h2>
        </div>
        <div className={styles.photo}>
         <img/>
        </div>      
      </div>
    </div>
  );
}

export default Main;
