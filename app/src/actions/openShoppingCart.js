export const openShoppingCart = () => dispatch => {
    dispatch({
        type:'OPEN_SHOPPING_CART',
        shoppingCartOpen: true,
    })
}