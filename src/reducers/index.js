import { combineReducers } from 'redux';

import itemsBase from './itemsBase';
import selectedItem from './selectedItem';

const rootReducer = combineReducers({
    itemsBase,
    selectedItem,
});

export default rootReducer;