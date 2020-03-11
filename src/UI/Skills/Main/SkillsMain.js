import React from 'react';
import styles from './SkillsMain.module.css';
import SkillMain from './SkillMain';

function SkillsMain(props) {
  let skillsElements = props.skills.map( s =>
    <SkillMain name={s.name} text={s.description} img={s.img} />)
  return (
    <div className={styles.main}>
     {skillsElements}
    </div>
  );
}

export default SkillsMain;
