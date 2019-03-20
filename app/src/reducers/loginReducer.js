const initialState = {
    loginModalOpen: false,
    mode: 'login',
    loggedInUser: ''
}

export default (prevState = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action
        case 'LOGOUT':
            return action
        case 'SIGNUP':
            return action
        case 'CLOSE_LOGIN_MODAL':
            return action
        case 'LOGIN_CUSTOMER':
            return action
        default:
            return prevState
    }
}