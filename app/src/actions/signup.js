export const signup = () => dispatch => {
    dispatch({
        type:'LOGIN',
        mode: 'singup',
        loginModalOpen: true
    })
}