import React from 'react';

import classes from './items.module.css';

function Items() {

    return (
        <div className={classes['wrap']}>
            <div className={classes['inner']}>
                <div className={classes['name']}>Test</div>
                <div className={classes['quantity-of-comments']}>0</div>
            </div>
            <button className={classes['button']}>Delete</button>
        </div>
    );
}

export default Items;