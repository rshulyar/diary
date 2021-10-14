import React, { useState } from 'react';
import classes from './addItems.module.css';
import { useDispatch } from 'react-redux';

function AddItems () {

    const [itemName, setItemName] = useState('');

    const dispatch = useDispatch();

    function buttonClick () {

        let a = {
            name: itemName,
            comments: [],
            quantityOfComments: 0
        }

        setItemName('');

        return a;
    }

    return (
        <div className={classes['wrap']}>
            <input 
                className={classes['input']} 
                placeholder=" Write items name" 
                value={itemName}
                onChange={(e) => {
                    setItemName(e.target.value);
                }} 
            />
            <button 
                className={classes['button']} 
                onClick={() => {dispatch({type: 'add', payload: buttonClick()});}}
            >Add item</button>
        </div>
    );
}

export default AddItems;