import React from 'react';
import './Settings.css';

const Settings = () => {
    return (
        <div id="settings">
            <div class="container">
                <h4>Settings</h4>

                <div class="setting-items">
                    <p>PERSONAL</p>
                    <div class="s-item">
                        <p>User Name:</p>
                        <input type="text" placeholder="Imtiaz" />
                    </div>

                    <div class="s-item">
                        <p>Email</p>
                        <input type="text" placeholder="axubair9@gmail.com" />
                    </div>

                    <div class="s-item">
                        <p>Password</p>
                        <input type="text" placeholder="....." />
                    </div>
                    <p id="setting-change-pass"><a href="#">Change Password</a></p>

                    <div class="s-item">
                        <p>Number</p>
                        <input type="text" placeholder="+880" />
                    </div>

                    <div class="s-item">
                        <p>Gender</p>
                        <select name="" id="">
                            <option value="">Prefer not to say</option>
                            <option value="">Female</option>
                            <option value="">Male</option>
                        </select>
                    </div>
                    <div class="divider-border"></div>

                    <p>SOCIAL</p>
                    <div class="s-item social">
                        <p>LinkedIn</p>
                        <p><a href="#">Connect LinkedIn Profile</a></p>
                    </div>
                    <div class="divider-border"></div>

                    <p>NOTIFICATION</p>
                    <div class="s-item">
                        <p>Type</p>
                        <div id="notification-type">
                            <p>EMAIL</p>
                            <p>SMS</p>
                            <p>PUSH</p>
                        </div>
                    </div>

                    <div class="s-item">
                        <p>New Listings</p>
                        <div class="toggle">
                            <div onclick="settingsIndicatorSlide()" class="indicator"></div>
                        </div>
                    </div>

                    <div class="s-item">
                        <p>New Listings Matching User Filter</p>
                        <div class="toggle">
                            <div onclick="settingsIndicatorSlide()" class="indicator"></div>
                        </div>
                    </div>

                    <div class="s-item">
                        <p>Listing Favorited</p>
                        <div class="toggle">
                            <div onclick="settingsIndicatorSlide()" class="indicator"></div>
                        </div>
                    </div>
                    <p id="setting-deactive-acc"><a href="#">Deactivate Account</a></p>
                    <div class="divider-border"></div>
                </div>

                <button id="settings-update-btn"><a href="#">SAVE AND UPDATE</a></button>
            </div>
        </div>
    );
};

export default Settings;