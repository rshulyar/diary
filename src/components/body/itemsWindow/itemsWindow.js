import React, { useEffect } from 'react';

import AddItems from './addItems';
import Items from './items'; 

import classes from './itemsWindow.module.css';
import { useSelector, useDispatch } from 'react-redux';

function ItemsWindow () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'startLoadItemsBase'});
    }, [])

    let store = useSelector(state => state.itemsBase);

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}>Items list</div>
            <AddItems/>
            <div className={classes['items-container']}>
                {store.map((item, i) => <Items 
                    key={i}
                    name={item.name} 
                    quantityOfComments={item.comments.length} 
                    number={i}
                />)}
            </div>
        </div>
    );
}

export default ItemsWindow;