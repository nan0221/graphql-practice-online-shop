export const logout = () => dispatch => {
    dispatch({
        type:'LOGOUT',
        mode: 'login',
        loginModalOpen: false,
        loggedInUser: ''
    })
}