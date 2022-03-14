import React from "react";
import styles from './css/Login.module.css'

class Login extends React.Component{
    render(){
        return(
            <div className={`${styles.login_container}`}>
                <h1>Login page</h1>
            </div>
        )
    }
}

export default Login;