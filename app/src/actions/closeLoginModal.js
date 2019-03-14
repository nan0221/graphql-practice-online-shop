export const closeLoginModal = () => dispatch => {
    dispatch({
        type:'CLOSE_LOGIN_MODAL',
        mode: 'login',
        loginModalOpen: false
    })
}