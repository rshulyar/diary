import React, { useState } from 'react';
import classes from './addItems.module.css';
import { useDispatch } from 'react-redux';

function AddItems () {

    const [itemName, setItemName] = useState('');

    const dispatch = useDispatch();

    function buttonClick () {

        let result = {
            name: itemName,
            comments: [],
        }
        dispatch({type: 'add', payload: result})

        setItemName('');
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
                onKeyPress={(e) => {
                    if(e.charCode === 13) {
                        buttonClick()
                    }
                }}
            />
            <button 
                className={classes['button']} 
                onClick={buttonClick}
            >Add item</button>
        </div>
    );
}

export default AddItems;