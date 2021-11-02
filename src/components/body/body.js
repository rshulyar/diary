import React from 'react';

import ItemsWindow from './itemsWindow';
import CommentsWindow from './commentsWindow';

import classes from './body.module.css';

function Body () {

    return (
        <div className={classes['wrap']}>
            <ItemsWindow/>
            <CommentsWindow/>
        </div>
    );
}

export default Body;