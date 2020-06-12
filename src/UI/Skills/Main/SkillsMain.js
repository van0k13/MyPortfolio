import React from 'react';
import styles from './SkillsMain.module.css';
import SkillMain from './SkillMain';
import {useSelector} from "react-redux";

const SkillsMain = () => {
  const {skills} = useSelector((state)=> state.skills)
  let skillsElements = skills.map( s =>
    <SkillMain name={s.name} text={s.description} img={s.img} />)
  return (
    <div className={styles.main}>
     {skillsElements}
    </div>
  );
}

export default SkillsMain;
