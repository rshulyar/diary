import React from 'react';

import classes from './items.module.css';

function Items(props) {

    return (
        <div className={classes['wrap']}>
            <div className={classes['inner']}>
                <div className={classes['name']}>{props.name}</div>
                <div className={classes['quantity-of-comments']}>{props.quantityOfComments}</div>
            </div>
            <button className={classes['button']}>Delete</button>
        </div>
    );
}

export default Items;