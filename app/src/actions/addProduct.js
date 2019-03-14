export const addProduct = (id) => dispatch => {
    dispatch({
        type:'ADD_PRODUCT',
        mode: 'add',
        productId: id,
        editModalOpen: true
    })
}