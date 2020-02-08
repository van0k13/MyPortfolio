import React from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal'

const Contacts = () => {
  return (
    <div id={'contacts'} className={styles.contacts}>
      <Fade left>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.text}>Contact</h2>
          <span className={styles.linee}></span>
        </div>
        <form className={styles.form}>
          <input className={styles.formInput} type='input' placeholder='Name' />
          <input className={styles.formInput} type='input' placeholder='E-mail' />
          <textarea className={styles.formInput} type='textarea' rows='8' placeholder="Your message" />
        </form>
        <div className={styles.contactButton}>
          <button className={styles.worksButton}><span>Submit</span></button>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Contacts;
