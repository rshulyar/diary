import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import App from './App';

const initialState = [{
  name: 'Add items',
  comments: [],
  quantityOfComments: 0
}];

function itemsList (state = initialState, action) {
  if (action.type === 'add') {
    return [...state, action.payload]
  }
}

const store = createStore(itemsList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: 'add', payload: {
  name: 'test',
  comments: [],
  quantityOfComments: 0
}});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
