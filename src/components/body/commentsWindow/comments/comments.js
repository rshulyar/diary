import React from 'react';

import classes from './comments.module.css';

function Comments() {

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}></div>
            <div className={classes['inner']}></div>
        </div>
    );
}

export default Comments;