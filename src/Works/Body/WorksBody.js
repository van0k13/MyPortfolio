import React from 'react';
import styles from './WorksBody.module.css';
import WorkBody from './WorkBody';

function WorksBody(props) {
  let projectsElements = props.projects.map(p =>
    <WorkBody name={p.name} img={p.img} text={p.description} />)
  return (
    <div className={styles.mainBlocks}>
      {projectsElements}
    </div>
  );
}

export default WorksBody;
