import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import classes from './addComments.module.css';

function AddComments () {

    let storeSelectedItem = useSelector(state => state.selectedItem);

    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    function addComment() {

        let a = {
            text: comment,
            index: storeSelectedItem
        }

        setComment('');

        return a;
    }

    return(
        <div className={classes['wrap']}>
            <button className={classes['button']}
                onClick={()=>{dispatch({type: 'addComment', payload: addComment()})}}
            >Add</button>
            <input className={classes['input']}
                placeholder=" Write comment text"
                value={comment}
                onChange={(e) => {
                    setComment(e.target.value);
                }}
                onKeyPress={(e) => {
                    if(e.charCode === 13) {
                        dispatch({type: 'addComment', payload: addComment()})
                    }
                }}
            />
        </div>
    );
}

export default AddComments;