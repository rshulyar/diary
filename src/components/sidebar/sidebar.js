import React from 'react';
import classes from './sidebar.module.css';

function Sidebar() {

    return (
        <div className={classes['wrap']}>
            <div className={classes['left-space']}></div>
            <div className={classes['inner']}>
                <div className={classes['top-space']}></div>
                <div className={`${classes["title"]} ${classes["text"]}`}>DIARY</div>
                <div className={classes['middle-space']}></div>
                <div className={`${classes["motto"]} ${classes["text"]}`}>Plan and comment</div>
                <div className={classes['bottom-space']}></div>
            </div>
        </div>
    );
}

export default Sidebar;