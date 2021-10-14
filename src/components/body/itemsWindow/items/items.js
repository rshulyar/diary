import React from 'react';

import { useDispatch } from 'react-redux';

import classes from './items.module.css';

function Items(props) {

    const dispatch = useDispatch();

    function deleteElement() {

        return props.number;
    }

    return (
        <div className={classes['wrap']}>
            <div className={classes['inner']}>
                <div className={classes['name']}>{props.name}</div>
                <div className={classes['quantity-of-comments']}>{props.quantityOfComments}</div>
            </div>
            <button className={classes['button']} 
                onClick={() => {dispatch({type: 'delete', payload: deleteElement()})}}
            >Delete</button>
        </div>
    );
}

export default Items;