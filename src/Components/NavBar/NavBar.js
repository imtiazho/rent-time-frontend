import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <header>
            <nav>
                <div className="container">
                    <Link to='/'><h3>RentTime</h3></Link>
                    {/* <img src="home" alt="Logo of Rent Time"> */}

                    <div id="search-bar-for-responsive">
                        <input type="text" name="" id="responive-searchbar" placeholder="Search share accommod..." /> <i className="fa fa-search" aria-hidden="true"></i>
                    </div>

                    <ul id="nav-items" className={`${navOpen && "open"}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/blogs-page'>Blog</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} className='rela'>
                            <Link to='/'>Pages</Link>
                            {hover && <ul className='othersPage'>
                                <li><Link to='/userDashBoard'>Profile</Link></li>
                                <li><Link to='/settings'>Settings</Link></li>
                                <li><Link to='/myrequest'>My Request</Link></li>
                            </ul>}
                        </li>

                        {/* Dark Theme Button  */}
                        <div className="dark-and-light-theme">
                            <Link className="search-bar"><input type="text" /><i className="fa fa-search" aria-hidden="true" ></i></Link>
                            <button className="dark"><i className="fa fa-moon-o" aria-hidden="true"></i></button>
                            <button className="light"><i className="fa fa-sun-o" aria-hidden="true"></i></button>
                        </div>
                    </ul>

                    {/* Responsive Nav Bar */}
                    <div onClick={() => setNavOpen(!navOpen)} className="responsive-navbar">
                        {
                            navOpen ?
                                <button id="nav-bar-close"><i className="fa fa-times" aria-hidden="true"></i></button>
                                :
                                <button id="nav-bar-open"><i className="fa fa-bars" aria-hidden="true"></i></button>
                        }
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default NavBar;