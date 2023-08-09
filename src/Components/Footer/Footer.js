import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <div class="container">
                <div class="intro">
                    <h4 class="footer-title"><a href="#" class="logo">Rent Time</a></h4>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <a href="">Read more <span class="fa fa-chevron-right" style={{ fontSize: "11px" }}></span></a>
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
                        <p class="tag-cloud-link">apartment</p>
                        <p class="tag-cloud-link">home</p>
                        <p class="tag-cloud-link">rental</p>
                        <p class="tag-cloud-link">rent</p>
                        <p class="tag-cloud-link">house</p>
                        <p class="tag-cloud-link">place</p>
                        <p class="tag-cloud-link">sleep</p>
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
                            <Link to='/privacy'>Terms</Link>
                            <Link to='/privacy'>Privacy</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;