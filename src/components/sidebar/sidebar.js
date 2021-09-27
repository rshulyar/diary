import React from 'react';
import styles from './sidebar.module.css';

function Sidebar() {

    return (
        <div className={styles['wrap']}>
            <div className={`${styles["title"]} ${styles["text"]}`}>DIARY</div>
            <div className={`${styles["motto"]} ${styles["text"]}`}>Plan and comment</div>
        </div>
    );
}

export default Sidebar;