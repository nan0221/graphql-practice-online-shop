export const editProduct = (id) => dispatch => {
    dispatch({
        type:'EDIT_PRODUCT',
        mode: 'edit',
        productId: id,
        editModalOpen: true
    })
}