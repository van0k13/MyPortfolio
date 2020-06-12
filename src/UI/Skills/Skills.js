import React from 'react';
import styles from './Skills.module.css';
import SkillsHeader from './Header/SkillsHeader';
import SkillsMain from './Main/SkillsMain';
import Fade from 'react-reveal/Fade'

function Skills() {
  return (
    <div className={styles.skills}>
      <Fade>
      <div id={'skills'} className={styles.container}>
        <SkillsHeader />
        <SkillsMain />
      </div>
      </Fade>
    </div>
  );
}

export default Skills;
