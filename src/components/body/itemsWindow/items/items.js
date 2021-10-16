import React from 'react';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import classes from './items.module.css';

function Items(props) {

    const dispatch = useDispatch();

    let storeSelectedItem = useSelector(state => state.selectedItem);

    function targetItem(e) {
        
        return e;
    }

    function deleteItem() {

        if(storeSelectedItem === props.number) {
            dispatch({type: 'selected', payload: targetItem(null)})
        }
            
        
        return props.number;
    }

    return (
        <div className={classes['wrap']}>
            <div className={classes['inner']}>
                <div className={classes['name']} 
                    onClick={() => {dispatch({type: 'selected', payload: targetItem(props.number)})}}
                >{props.name}</div>
                <div className={classes['quantity-of-comments']}>{props.quantityOfComments}</div>
            </div>
            <button className={classes['button']} 
                onClick={() => {dispatch({type: 'delete', payload: deleteItem()})}}
            >Delete</button>
        </div>
    );
}

export default Items;