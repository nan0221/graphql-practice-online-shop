export const loginCustomer = (email) => dispatch => {
    dispatch({
        type:'LOGIN_CUSTOMER',
        mode: 'login',
        loginModalOpen: false,
        loggedInUser: email
    })
}