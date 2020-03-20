import React from 'react'

const Login = props => {
    return(
        <div className="Login">
            Email: <input type="email" name="input" />
            Password: <input type="password" name="password" />
        </div>
    )
}
export default Login