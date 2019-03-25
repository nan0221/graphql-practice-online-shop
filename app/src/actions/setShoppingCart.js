export const setShoppingCart = (products) => dispatch => {
    dispatch({
        type:'SET_SHOPPING_CART',
        products: products,
        shoppingCartOpen: false
    })
}