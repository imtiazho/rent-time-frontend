import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div id="home">
            <div class="container">
                <div class="left-side-content">
                    <h1>Rent Time - Home Renting Made Simple</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque repellendus quos debitis velit, unde fugit. Voluptatem assumenda recusandae necessitatibus cupiditate molestias magnam, asperiores excepturi!</p>

                    <button><Link>Explore More</Link></button>
                </div>

                <h3 id="responsive-title">Rent Time - Home Renting Made Simple</h3>

                <div class="right-side-content">
                    <div class="each-content-box">
                        <h5>I need a roommate</h5>
                        <p>Create a listing for a potential <br />roommate</p>
                        <button><Link>Find Roommate</Link></button>
                    </div>

                    <div class="each-content-box">
                        <h5>I need a room</h5>
                        <p>Create a listing for a potential <br /> roommate</p>
                        <button><Link>Find House</Link></button>
                    </div>

                    <div class="each-content-box">
                        <h5>Add my vacant place </h5>
                        <p>Create a listing for post ads</p>
                        <button><Link>Post Ads</Link></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopBanner;