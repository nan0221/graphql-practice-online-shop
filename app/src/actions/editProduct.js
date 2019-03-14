export const editProduct = (id) => dispatch => {
    dispatch({
        type:'EDIT_PRODUCT',
        productId: id,
        editModalOpen: true
    })
}