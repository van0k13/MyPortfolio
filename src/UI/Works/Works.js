import React from 'react';
import styles from './Works.module.css';
import WorksHeader from './Header/WorksHeader';
import WorksBody from './Body/WorksBody';
import Fade from 'react-reveal/Fade'

const Works = () => {
    return (
        <div className={styles.main}>
            <Fade>
                <div id={'projects'} className={styles.container}>
                    <WorksHeader/>
                    <WorksBody/>
                </div>
            </Fade>
        </div>
    );
}

export default Works;
