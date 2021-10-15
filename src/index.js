import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';

import App from './App';

const initialState = {
  itemsBase: [{
    name: 'Add items',
    comments: ['first', 'second'],
    quantityOfComments: 0
  }],
  selectedItem: 0
};

function itemsBase (state = initialState.itemsBase, action) {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    case 'delete': {
      return [...state.slice(0, action.payload)]
      .concat([...state.slice(action.payload+1)])
    }
    default: return state;
  }
}

function selectedItem(state = initialState.selectedItem, action) {
  switch (action.type) {
    case 'selected': {
      return action.payload;
    }
  
    default: return state;
  }
}

const rootReducer = combineReducers({
  itemsBase,
  selectedItem,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
