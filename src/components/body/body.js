import React from 'react';

import ItemsWindow from './itemsWindow';
import CommentsWindow from './commentsWindow';

import classes from './body.module.css';

function Body () {

    return (
        <div className={classes['wrap']}>
            <div className={classes['row-space']}></div>
            <div className={classes['inner']}>
                <div className={classes['left-column-space']}></div>
                <ItemsWindow/>
                <div className={classes['center-column-space']}></div>
                <CommentsWindow/>
                <div className={classes['right-column-space']}></div>
            </div>
        </div>
    );
}

export default Body;