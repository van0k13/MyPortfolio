import React from 'react';
import styles from './WorksBody.module.css';

const WorkBody = ({img, name, site}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={img} alt='icon'/>
            <div className={styles.overlay}>
                <div className={styles.text}>
                    {name}
                    <div>
                        <a href={site}>
                            view code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkBody;
