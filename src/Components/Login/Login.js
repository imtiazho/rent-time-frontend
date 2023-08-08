import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import loginImage from '../../media/login.svg';

const Login = () => {
    return (
        <div>
            <div id="login-page">
                <div class="container">
                    <form class="form-container" action="#">
                        <h4>Member Login</h4>

                        <div class="input-field">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i> <input placeholder="Email" type="email" required />
                        </div>

                        <div class="input-field">
                            <i class="fa fa-lock" aria-hidden="true"></i> <input placeholder="Password" type="password" required />
                        </div>

                        <button id="login-btn">LOGIN</button>
                        <p><Link href="#">Forgot Username</Link> / <Link href="#">Password?</Link></p>
                        <p id="sign-link">Don't have an Account? <Link to='/signup'>Sign Up</Link></p>
                    </form>

                    <img src={loginImage} alt="Picture of Login" />
                </div>
            </div>
        </div>
    );
};

export default Login;