import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './items.module.css';

function Items(props) {

    const dispatch = useDispatch();

    let store = useSelector(state => state.selectedItem);

    return (
        <div className={classes['wrap']}>
            <div className={classes['inner']}
                onClick={() => {dispatch({type: 'selected', payload: props.number})}}
            >
                <div className={`${classes['name']} ${classes[props.number === store ? 'selected' : '']}`} 
                >{props.name}</div>
                <div className={classes['quantity-of-comments']}>{props.quantityOfComments}</div>
            </div>
            <button className={classes['button']} 
                onClick={() => {dispatch({type: 'delete', payload: props.number})}}
            >Delete</button>
        </div>
    );
}

export default Items;