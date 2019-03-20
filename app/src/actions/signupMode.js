export const signupMode = () => dispatch => {
    dispatch({
        type:'SIGNUP',
        mode: 'signup',
        loginModalOpen: true
    })
}