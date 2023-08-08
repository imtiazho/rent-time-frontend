import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div class="container">
                <div class="intro">
                    <h4 class="footer-title"><a href="#" class="logo">Rent Time</a></h4>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <a href="about.html">Read more <span class="fa fa-chevron-right" style={{ fontSize: "11px" }}></span></a>
                </div>

                <div class="Services">
                    <h4 class="footer-title">Services</h4>
                    <ul>
                        <li><a href="#">Map Direction</a></li>
                        <li><a href="#">Accomodation Services</a></li>
                        <li><a href="#">Great Experience</a></li>
                        <li><a href="#">Perfect central location</a></li>
                    </ul>
                </div>

                <div class="tag-cloud">
                    <h4 class="footer-title">Tags</h4>
                    <div class="short-link">
                        <a href="#" class="tag-cloud-link">apartment</a>
                        <a href="#" class="tag-cloud-link">home</a>
                        <a href="#" class="tag-cloud-link">rental</a>
                        <a href="#" class="tag-cloud-link">rent</a>
                        <a href="#" class="tag-cloud-link">house</a>
                        <a href="#" class="tag-cloud-link">place</a>
                        <a href="#" class="tag-cloud-link">sleep</a>
                    </div>
                </div>

                <div class="subscribe">
                    <div class="subscribeWrapper">
                        <h4 class="footer-title">Subcribe</h4>
                        <form action="#" class="subscribe-form">
                            <input type="email" class="form-control rounded-left" placeholder="Enter email address" required />
                            <button type="submit"><i class="fa fa-paper-plane"></i></button>
                        </form>
                    </div>

                    <div id="social-links">
                        <h4>Follow us</h4>
                        <ul>
                            <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                            <li><a href="#"><span class="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container hrtag">
                <hr />
            </div>

            <div class="copyright-message-and-privacy">
                <div class="container copyright-box">
                    <div class="copyright-message">
                        <p>
                            Copyright &copy; 2022 All rights reserved | Developed by imtiaz.h
                        </p>
                    </div>
                    <div class="terms-privacy">
                        <p>
                            <a href="privacy.html">Terms</a>
                            <a href="privacy.html">Privacy</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;