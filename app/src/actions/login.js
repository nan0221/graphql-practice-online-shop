export const login = () => dispatch => {
    dispatch({
        type:'LOGIN',
        mode: 'login',
        loginModalOpen: true
    })
}