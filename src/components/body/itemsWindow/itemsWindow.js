import React from 'react';

import AddItems from './addItems';

import classes from './itemsWindow.module.css';

function ItemsWindow () {

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}>Items list</div>
            <AddItems/>
        </div>
    );
}

export default ItemsWindow;