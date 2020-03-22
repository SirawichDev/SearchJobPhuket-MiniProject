import React from 'react'

const Login = props => {
    return(
        <div className="Login">
            <h1>Login Component</h1>
            Email: <input type="email" name="input" />
            Password: <input type="password" name="password" />
            <button type="submit" onClick="">login</button>
        </div>
    )
}
export default Login