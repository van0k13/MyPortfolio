import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Contacts</h2>
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='E-mail' />
          <textarea rows='8' placeholder="Your message" />
        </form>
        <div >
          <button className={styles.contactsButton}>Submit</button>
        </div>
      </div>
      
    </div>
  );
}

export default Contacts;
