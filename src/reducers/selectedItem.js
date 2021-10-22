const initialState = 0;

function selectedItem(state = initialState, action) {
    switch (action.type) {
        case 'selected': {
            localStorage.setItem('selectedItem', action.payload);
            return action.payload;
        }
        case 'delete': {
            if (state === action.payload)
                return null;
        }
        default: return state;
    }
}

export default selectedItem;