import React, {useContext, useReducer} from 'react'
import loginReducer from '../reducers/loginReducer';
import LoginContext from '../context/LoginContext';

const LoginStatus = () => {

    const {user, userDispatch: dispatch} = useContext(LoginContext)

    return (
        <>
            {user
            ?
            <>
            <div>
                <span className="mx-2">{user}</span>
                <a onClick={() => dispatch({ type:'LOGOUT' })} href="#">
                Logout
                </a>
            </div>
            </>
            :
            <div>
                <a onClick={() => dispatch({ type: 'LOGIN', username:'podestal' })} href="#">
                Login
                </a>
            </div>
            }
        </>
    )

}

// setUser('mosh.hamedani')
export default LoginStatus