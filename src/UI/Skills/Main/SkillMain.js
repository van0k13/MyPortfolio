import React from 'react';
import styles from './SkillsMain.module.css';

const SkillMain = ({img, text, name}) => {
    return <div className={styles.skillName}>
        <div className={styles.skillPhoto1}>
            <div className={styles.photoBack}>
            </div>
            <img src={img} alt='description'/>
        </div>
        <div className={styles.textBlock}>
            <h2 className={styles.h2Text}>{name}</h2>
            <span className={styles.spanText}>{text}</span>
        </div>
    </div>
}

export default SkillMain;
