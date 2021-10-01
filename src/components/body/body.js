import React from 'react';

import ItemsWindow from './itemsWindow';

import styles from './body.module.css';

function Body () {

    return (
        <div className={styles['wrap']}>
            <div className={styles['row-space']}></div>
            <div className={styles['inner']}>
                <div className={styles['left-column-space']}></div>
                <ItemsWindow/>
                <div className={styles['center-column-space']}></div>
                <div className={styles['div1']}></div>
                <div className={styles['right-column-space']}></div>
            </div>
        </div>
    );
}

export default Body;