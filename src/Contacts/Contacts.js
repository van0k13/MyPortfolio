import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.text}>Contact</h2>
          <span className={styles.line}></span>
        </div>
        <form className={styles.form}>
          <input className={styles.formInput} type='text' placeholder='Name' />
          <input className={styles.formInput} type='text' placeholder='E-mail' />
          <textarea className={styles.formInput} rows='8' placeholder="Your message" />
        </form>
        <div className={styles.contactButton}>
          <button className={styles.worksButton}><span>Submit</span></button>
        </div>
      </div>
      
    </div>
  );
}

export default Contacts;
