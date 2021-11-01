const initialState = [
    {
        name: 'Test item',
        comments: ['Write comments']
    }
];

function itemsBase (state = initialState, action) {
    switch (action.type) {
        case 'add': {
            return [...state, action.payload];
        }
        case 'delete': {
            
            return [...state.slice(0, action.payload),...state.slice(action.payload+1)];
        }
        case 'addComment': {
            if (action.payload.index !== null) {
                const item = {
                    ...state[action.payload.index],
                    comments:[...state[action.payload.index].comments,action.payload.text]
                };
                return [...state.slice(0, action.payload.index), item, ...state.slice(action.payload.index + 1)];
            }
            return state;
        }
        case 'deleteComment': {
            const item = {
                ...state[action.payload.indexItem],
                comments: [...state[action.payload.indexItem].comments.slice(0, action.payload.indexComment),
                    ...state[action.payload.indexItem].comments.slice(action.payload.indexComment + 1)]
            };
            
            return ([...state.slice(0, action.payload.indexItem),
                item,
                ...state.slice(action.payload.indexItem + 1)]
            );
        }
        case 'finishLoadItemsBase': {
            return action.payload;
        }
        default: return state;
    }
}

export default itemsBase;