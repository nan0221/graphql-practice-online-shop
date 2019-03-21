const initialState = {
    shoppingCartOpen: false
}

export default (prevState = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SHOPPING_CART':
            return action
        case 'CLOSE_SHOPPING_CART':
            return action
        default:
            return prevState
    }
}