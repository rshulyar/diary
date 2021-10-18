const initialState = {
    itemsBase: [{
        name: 'Add items',
        comments: ['first', 'second']
    },{
        name: 'Test',
        comments: ['one', 'two']
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
        case 'addComment': {
            if (action.payload.index !== null) {
                state[action.payload.index].comments.push(action.payload.text);
            }
            return [...state];
        }
        case 'deleteComment': {
            state[action.payload.indexItem].comments = [...state[action.payload.indexItem].comments.slice(
                0, action.payload.indexComment)]
            .concat([...state[action.payload.indexItem].comments.slice(action.payload.indexComment+1)]);

            return [...state];
        }
        default: return state;
    }
}

export default itemsBase;