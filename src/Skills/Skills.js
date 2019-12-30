import React from 'react';
import styles from './Skills.module.css';
import SkillsHeader from './Header/SkillsHeader';
import SkillsMain from './Main/SkillsMain';

function Skills(props) {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <SkillsHeader />
        <SkillsMain skills={props.skills}/>

      </div>

    </div>
  );
}

export default Skills;
