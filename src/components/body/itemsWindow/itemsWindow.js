import React from 'react';

import AddItems from './addItems';
import Items from './items'; 

import classes from './itemsWindow.module.css';

function ItemsWindow () {

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}>Items list</div>
            <AddItems/>
            <div className={classes['items-container']}>
                <Items/>
            </div>
        </div>
    );
}

export default ItemsWindow;