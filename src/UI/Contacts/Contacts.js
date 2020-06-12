import React from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal'

const Contacts = ({
                      success, error, name, setName, email, setEmail, message, setMessage,
                      onSubmitClick
                  }) => {
    return (
        <div id={'contacts'} className={styles.contacts}>
            <Fade left>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.text}>Contact</h2>
                        <span className={styles.linee}/>
                    </div>
                    {!success
                        ? <form className={styles.form}>
                            <input className={styles.formInput} value={name}
                                   onChange={e => setName(e.currentTarget.value)}
                                   type='input' placeholder='Name'/>
                            <input className={styles.formInput} value={email}
                                   onChange={e => setEmail(e.currentTarget.value)}
                                   type='input' placeholder='E-mail'/>
                            <textarea className={styles.formInput} rows='8'
                                      value={message} onChange={e => setMessage(e.currentTarget.value)}
                                      placeholder="Your message"/>
                        </form>
                        : <div>
                            Your letter has been sent!
                            <img className={styles.imgGood}
                                 src={'https://upload.wikimedia.org/wikipedia/commons/8/80/Symbol_OK.svg'}
                                 alt={'okay'}/>
                        </div>
                    }
                    {error && <div>something went wrong :(</div>}
                    <div className={styles.contactButton}>
                        <button onClick={onSubmitClick} className={styles.worksButton}>
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
