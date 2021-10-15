import React from 'react';

import Comments from './comments';
import AddComments from './addComments';

import classes from './commentsWindow.module.css';

function CommentsWindow() {

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}>Comments list</div>
            <div className={classes['comments-container']}>
                <Comments/>
            </div>
            <AddComments/>
        </div>
    );
}

export default CommentsWindow;