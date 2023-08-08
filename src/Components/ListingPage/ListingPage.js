import React from 'react';
import individualList from '../../media/individual-list.svg';

const ListingPage = () => {
    return (
        <div>
            <div id="my-request-page">
                <div class="container">
                    <h3>My Listing</h3>

                    <div class="request-showing-field">
                        <img src={individualList} alt="" />
                        <h2>You have no List yet!</h2>
                        <p><small>You decide on house rules and move-in dates. We'll get your <br /> listing in front of thousands of verified roommates.</small></p>
                        <button><a href="#">LIST YOUR PLACE FOR FREE</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingPage;