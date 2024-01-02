const loginReducer = (user, action) => {

    switch (action.type) {
        case 'LOGIN':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return user
    }
}

export default loginReducer