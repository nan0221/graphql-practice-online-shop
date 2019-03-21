export const closeShoppingCart = () => dispatch => {
    dispatch({
        type:'CLOSE_SHOPPING_CART',
        shoppingCartOpen: false
    })
}