import React from 'react';

import { useSelector } from 'react-redux';

import Comments from './comments';
import AddComments from './addComments';

import classes from './commentsWindow.module.css';

function CommentsWindow() {

    let storeItemsBase = useSelector(state => state.itemsBase);
    let storeSelectedItem = useSelector(state => state.selectedItem);

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}>Comments list</div>
            <div className={classes['comments-container']}>
                {storeSelectedItem !== null ? storeItemsBase[storeSelectedItem].comments.map((item, i) => <Comments
                    key={i}
                    index={i}
                    text={item}
                />) : ''}
            </div>
            <AddComments/>
        </div>
    );
}

export default CommentsWindow;