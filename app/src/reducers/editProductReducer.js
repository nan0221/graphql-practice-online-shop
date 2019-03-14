const initialState = {
    editModalOpen: false,
    productId: ''
}

export default (prevState = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PRODUCT':
            return action
        case 'CLOSE_EDIT_MODAL':
            return action
        default:
            return prevState
    }
}