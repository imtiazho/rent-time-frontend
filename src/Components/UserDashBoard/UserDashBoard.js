import React from 'react';
import './UserDashBoard.css';
import userPic from '../../media/user-3.jpg';
import listingSvg from '../../media/listing.svg';
import { Link } from 'react-router-dom';

const UserDashBoard = () => {
    return (
        <div>
            <div id="dash-board">
                <div class="upper-navigation">
                    <Link to='/listing' class="each-content-box">
                        <p><i class="fa-solid fa-plus"></i>  Create a listing for a potential <br />roommate</p>
                    </Link >

                    <Link to='/listing' class="each-content-box">
                        <p><i class="fa-solid fa-plus"></i>  Create a listing for a potential <br /> flatmate</p>
                    </Link >

                    <Link to='/for-rent' class="each-content-box">
                        <p><i class="fa-solid fa-plus"></i>  Create a listing for post ads</p>
                    </Link>
                </div>

                <div class="container">
                    <div class="left-side">
                        <div class="profile">
                            <img src={userPic} alt="Picture of user" />

                            <p>Accounts with connected profiles are more likely to find roommates!</p>
                            <p><a href="#">Connect LinkedIn Profile</a></p>

                            <div id="linkedInProfile">
                                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="right-side">
                        <div class="about-user">
                            <div>
                                <p><i class="fa fa-user" aria-hidden="true"></i></p>
                                <h4>ABOUT RASHED</h4>
                            </div>

                            <div>
                                <p><Link to='/edit-profile' href="edit-profile.html"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</Link></p>
                            </div>
                        </div>

                        <div class="listing-on-rent">
                            <div>
                                <p><i class="fa fa-list-ul" aria-hidden="true"></i></p>
                                <h4>MY LISTING</h4>
                            </div>

                            <img src={listingSvg} alt="Picture of listing" />

                            <button><a href="#">Create a list</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;