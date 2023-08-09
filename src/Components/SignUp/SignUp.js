import React from 'react';
import signupImage from '../../media/signup.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div id="register-page">
                <div class="container">
                    <div class="form-box">
                        <h4>Member Register</h4>

                        <form id="student" class="input-group">
                            <div class="name-field">
                                <div>
                                    <i class="fa fa-user" aria-hidden="true"></i> <input placeholder="First Name" type="text" required />
                                </div>

                                <div>
                                    <i class="fa fa-user" aria-hidden="true"></i> <input placeholder="Last Name" type="text" required />
                                </div>
                            </div>

                            <div class="input-field">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i> <input placeholder="Email" type="email" required />
                            </div>

                            <div class="input-field">
                                <i class="fa fa-lock" aria-hidden="true"></i> <input placeholder="Password" type="password" required />
                            </div>

                            <div class="input-field">
                                <i class="fa fa-lock" aria-hidden="true"></i> <input placeholder="Re-type Password" type="password" required />
                            </div>

                            <div class="condition">
                                <p><input type="checkbox" id="" />I agree with <a href="privacy.html">term and condition</a>.</p>
                            </div>

                            <button id="register-btn"><Link href="">Sign Up</Link></button>

                            <p id="login-link">Already have an Account? <Link to='/login' href="">Login</Link></p>
                        </form>
                        {/* <form id="owner" class="input-group">
                            <div class="name-field">
                                <div>
                                    <i class="fa fa-user" aria-hidden="true"></i> <input placeholder="First Name" type="text" required />
                                </div>

                                <div>
                                    <i class="fa fa-user" aria-hidden="true"></i> <input placeholder="Last Name" type="text" required />
                                </div>
                            </div>

                            <div class="input-field">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i> <input placeholder="Email" type="email" required />
                            </div>

                            <div class="input-field">
                                <i class="fa fa-lock" aria-hidden="true"></i> <input placeholder="Password" type="password" required />
                            </div>

                            <div class="input-field">
                                <i class="fa fa-lock" aria-hidden="true"></i> <input placeholder="Re-type Password" type="password" required />
                            </div>

                            <div class="condition">
                                <p><input type="checkbox" id="" />I agree with <a href="privacy.html">term and condition</a>.</p>
                            </div>

                            <button id="register-btn"><Link href="">Sign up</Link></button>

                            <p id="login-link">Already have an Account? <Link href="">Login</Link></p>
                        </form> */}
                    </div>

                    <img src={signupImage} alt="Picture of Login Picture" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;