import React from 'react';

import classes from './comments.module.css';

function Comments(props) {

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}></div>
            <div className={classes['inner']}>{props.text}</div>
        </div>
    );
}

export default Comments;