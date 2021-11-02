import React from 'react';
import classes from './sidebar.module.css';

function Sidebar() {

    return (
        <div className={classes['wrap']}>
            <div className={`${classes["title"]} ${classes["text"]}`}>DIARY</div>
            <div className={`${classes["motto"]} ${classes["text"]}`}>Plan and comment</div>
        </div>
    );
}

export default Sidebar;