import React from 'react';
import request from '../../media/request-list.svg';
import './MyRequest.css';

const MyRequest = () => {
    return (
        <div>
            <div id="my-request-page">
                <div class="container">
                    <h3>Requests</h3>

                    <div class="request-showing-field">
                        <img src={request} alt="" />
                        <p>You have no requests yet. Want to learn more how<br />requests on rent works?</p>
                        <button><a href="#">Learn More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequest;