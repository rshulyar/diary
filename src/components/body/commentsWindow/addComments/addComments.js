import React from 'react';

import classes from './addComments.module.css';

function AddComments () {

    return(
        <div className={classes['wrap']}>
            <div className={classes['title']}></div>
            <input className={classes['input']}/>
        </div>
    );
}

export default AddComments;