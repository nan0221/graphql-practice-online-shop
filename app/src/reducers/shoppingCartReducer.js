const initialState = {
    shoppingCartOpen: false,
    products: ''
}

export default (prevState = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SHOPPING_CART':
            return ({
                type:'OPEN_SHOPPING_CART',
                products: prevState.products,
                shoppingCartOpen: true
            })
        case 'CLOSE_SHOPPING_CART':
            return ({
                type:'CLOSE_SHOPPING_CART',
                products: prevState.products,
                shoppingCartOpen: false
            })
        case 'SET_SHOPPING_CART':
            return action
        default:
            return prevState
    }
}