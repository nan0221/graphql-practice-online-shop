export const closeEditModal = () => dispatch => {
    dispatch({
        type:'CLOSE_EDIT_MODAL',
        productId: '',
        editModalOpen: false
    })
}