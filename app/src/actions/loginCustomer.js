export const loginCustomer = (email, role) => dispatch => {
    dispatch({
        type:'LOGIN_CUSTOMER',
        mode: 'login',
        loginModalOpen: false,
        loggedInUser: email,
        isAdmin: (role === 'ADMIN')
    })
}