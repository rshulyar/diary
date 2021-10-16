import React from 'react';

import AddItems from './addItems';
import Items from './items'; 

import classes from './itemsWindow.module.css';
import { useSelector } from 'react-redux';

function ItemsWindow () {

    let store = useSelector(state => state.itemsBase);

    const itemsList = [];
    for (let i = 0; i < store.length; i++) {
        
        let b = store.indexOf(store[i]);

        itemsList.push(<Items 
            key={i}
            name={store[i].name} 
            quantityOfComments={store[i].comments.length} 
            number={b}
        />);
    }

    return (
        <div className={classes['wrap']}>
            <div className={classes['title']}>Items list</div>
            <AddItems/>
            <div className={classes['items-container']}>
                {itemsList}
            </div>
        </div>
    );
}

export default ItemsWindow;