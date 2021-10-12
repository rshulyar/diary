import React from 'react';
import classes from './addItems.module.css';

function AddItems () {

    return (
        <div className={classes['wrap']}>
            <input className={classes['input']} placeholder=" Write items name"/>
            <button className={classes['button']}>Add item</button>
        </div>
    );
}

export default AddItems;