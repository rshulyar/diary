const initialState = {
    selectedItem: 0
};

function selectedItem(state = initialState.selectedItem, action) {
    switch (action.type) {
        case 'selected': {
            return action.payload;
        }
        default: return state;
    }
}

export default selectedItem;