export const loginMode = () => dispatch => {
    dispatch({
        type:'LOGIN',
        mode: 'login',
        loginModalOpen: true
    })
}