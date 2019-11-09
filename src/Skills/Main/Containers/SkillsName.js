import React from 'react';
import styles from './SkillsName.module.css';

function SkillsName() {
  return (
    <div className={styles.main}>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto}>
          <img width='150' height='150' src='https://pbs.twimg.com/profile_images/701987172107177985/rfBqFfUw_400x400.jpg' alt='#' />
        </div>
        <h2>Speed</h2>
        <span>skill description</span>
      </div>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto}>
          <img width='150' height='150' src='https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_1687,w_1687,x_820,y_-1/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1554308838/190403-trump-windmills-tease_sav4uh' alt='#' />
        </div>
        <h2>Strength</h2>
        <span>skill description</span>
      </div>
      <div className={styles.skillName}>
        <div className={styles.skillPhoto}>
          <img width='150' height='150' src='https://images.reverb.com/image/upload/s--JQBYUuiH--/t_thumb/v1550256192/bokrqlm1vvb2mv5sdsvg.jpg' alt='#' />
        </div>
        <h2>Guitarability</h2>
        <span>skill description</span>
      </div>
    </div>
  );
}

export default SkillsName;
