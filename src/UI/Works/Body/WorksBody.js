import React from 'react';
import styles from './WorksBody.module.css';
import WorkBody from './WorkBody';
import {useSelector} from "react-redux";

const WorksBody = () => {
  const {projects} = useSelector((state)=> state.projects)
  let projectsElements = projects.map(p =>
    <WorkBody name={p.name} img={p.img} site={p.site} />)
  return (
    <div className={styles.mainBlocks}>
      {projectsElements}
    </div>
  );
}

export default WorksBody;
