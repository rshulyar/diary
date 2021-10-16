const initialState = {
    itemsBase: [{
        name: 'Add items',
        comments: ['first', 'second'],
        quantityOfComments: 0
    },{
        name: 'Test',
        comments: ['one', 'two'],
        quantityOfComments: 0
    }]
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

export default itemsBase;