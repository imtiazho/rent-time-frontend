import React from 'react';
import './EditProfile.css';
import Footer from '../Footer/Footer';

const EditProfile = () => {
    return (
        <div>
            <div class="dash-board" id="dash-board">

                <div class="container">

                    <div class="left-side">
                        <div class="profile">
                            <h3>Edit My Profile</h3>

                            <div class="profile-area">
                                <div class="delete-profile">
                                    <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                                </div>
                                <p><a href="#">+ Add Photo</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="right-side">
                        <div class="editable-info">
                            <div id="user-name">
                                <p><i class="fa fa-user" aria-hidden="true"></i></p>
                                <h4>ABOUT IMTIAZ</h4>
                            </div>

                            <div class="peronal-information">
                                <div class="left-side-personal-details">
                                    <form action="#">
                                        <p>Personal Details</p>
                                        <div id="input-row-edit">
                                            <input placeholder="First Name" type="text" />
                                            <input placeholder="Last Name" type="text" />
                                        </div>

                                        <p>About Me</p>
                                        <div>
                                            <textarea name="" id=""></textarea>
                                        </div>

                                        <p>Which of these words describe you?</p>
                                        <div id="edit-check-box">
                                            <label>
                                                <input type="checkbox" /> <span>FOODIE</span>
                                            </label>

                                            <label>
                                                <input type="checkbox" /> <span>HEALTH & WELLNESS</span>
                                            </label>

                                            <label>
                                                <input type="checkbox" /> <span>WORKS FROM HOME</span>
                                            </label>

                                            <label>
                                                <input type="checkbox" /> <span>CURRENT STUDENT</span>
                                            </label>

                                            <label>
                                                <input type="checkbox" /> <span>CURRENT STUDENT</span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div class="right-side-personal-details">
                                    <form action="#">
                                        <p>Date of Birth</p>
                                        <div id="input-row-edit">
                                            <input type="date" />
                                        </div>

                                        <div id="add-job">
                                            <p>Date of Birth</p>
                                            <a href="#">+ Add Job</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="editable-info">
                            <form action="#">
                                <div id="user-name">
                                    <p><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>
                                    <h4>ROOMMATE PREFERENCES</h4>
                                </div>

                                <div class="selected-box-in-edit">
                                    <div>
                                        <p>How do you clean your room?</p>
                                        <select name="" id="">
                                            <option value=""></option>
                                            <option value="">Once a month</option>
                                            <option value="">Once a week</option>
                                            <option value="">Every few days</option>
                                        </select>
                                    </div>

                                    <div>
                                        <p>
                                            Do you smoke?</p>
                                        <select name="" id="">
                                            <option value=""></option>
                                            <option value="">No</option>
                                            <option value="">Yes</option>
                                            <option value="">420 only</option>
                                        </select>
                                    </div>

                                    <div>
                                        <p>How do you feel about pets?</p>
                                        <select name="" id="">
                                            <option value=""></option>
                                            <option value="">Depends on pets</option>
                                            <option value="">No pets, please!</option>
                                            <option value="">I live with my own pets</option>
                                        </select>
                                    </div>

                                    <div>
                                        <p>How do you feel about guests?</p>
                                        <select name="" id="">
                                            <option value=""></option>
                                            <option value="">No guests please!</option>
                                            <option value="">Only during the day</option>
                                            <option value="">Overnight is fine</option>
                                        </select>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
};

export default EditProfile;