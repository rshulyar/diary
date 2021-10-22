import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import classes from './comments.module.css';

function Comments(props) {

    const dispatch = useDispatch();

    let storeSelectedItem = useSelector(state => state.selectedItem);

    return (
        <div className={classes['wrap']}>
            <button className={classes['button']}
                onClick={() => {dispatch({type: 'deleteComment', payload: {
                    indexItem: storeSelectedItem,
                    indexComment: props.index
                }})}}
            >Del</button>
            <div className={classes['inner']}>{props.text}</div>
        </div>
    );
}

export default Comments;