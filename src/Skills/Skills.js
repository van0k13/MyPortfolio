import React from 'react';
import styles from './Skills.module.css';
import SkillsHeader from './Header/SkillsHeader';
import SkillsMain from './Main/SkillsMain';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <SkillsHeader />
        <SkillsMain />

      </div>

    </div>
  );
}

export default Skills;
