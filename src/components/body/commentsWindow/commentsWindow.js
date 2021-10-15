import React from 'react';

import { useSelector } from 'react-redux';

import Comments from './comments';
import AddComments from './addComments';

import classes from './commentsWindow.module.css';

function CommentsWindow() {

    let storeItemsBase = useSelector(state => state.itemsBase);
    let storeSelectedItem = useSelector(state => state.selectedItem);

    const commentsList = [];
    for (let i = 0; i < storeItemsBase[storeSelectedItem].comments.length; i++) {
        commentsList.push(<Comments text={storeItemsBase[storeSelectedItem].comments[i]} />);
    }

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}>Comments list</div>
            <div className={classes['comments-container']}>
                {commentsList}
            </div>
            <AddComments/>
        </div>
    );
}

export default CommentsWindow;