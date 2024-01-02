import React, {useReducer} from 'react'
import loginReducer from '../reducers/loginReducer';

const LoginStatus = () => {
    const [user, dispatch] = useReducer(loginReducer, '')

    // if (user)
    //   return (
    //     <>
    //       <div>
    //         <span className="mx-2">{user}</span>
    //         {/* <a onClick={() => setUser('')} href="#">
    //           Logout
    //         </a> */}
    //       </div>
    //     </>
    //   );
    // return (
    //   <div>
    //     <a onClick={() => dispatch({ type: 'LOGIN', username:'podestal' })} href="#">
    //       Login
    //     </a>
    //   </div>
    // )
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