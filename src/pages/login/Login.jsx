import React from 'react'
import "./login.scss";
const Login = () => {
    return (
        <div className='login'>
            <div classname="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae tenetur eius in molestiae, nemo ipsum magnam qui. A, suscipit.</p>
                    <span>Dont have account?</span>
                    <button>Register Here</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder='password'/>
                        <button>Login</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login