import React, { useState } from 'react';
import './ForRent.css';
import peremeterPage from '../../media/peremeter-page.svg';

const ForRent = () => {
    const [currentAdd, setCurrentAdd] = useState("Chankharpul");

    return (
        <div id="post-requirements">
            <div class="container">
                <div class="left-side-collect-peremeter">
                    <h2>Rooms for Rent in {currentAdd}</h2>

                    <div class="city-select-and-search">
                        <select onChange={(e) => setCurrentAdd(e.target.value)}>
                            <option value="Chankharpul">Chankharpul</option>
                            <option value="Rayer Bazaar">Rayer Bazaar</option>
                            <option value="Andarkilla Bandarban">Andarkilla Bandarban</option>
                            <option value="Baghmara">Baghmara</option>
                            <option value="Arailla Bazaar">Arailla Bazaar</option>
                        </select>

                        <div class="input-field">
                            <i class="fa fa-map-marker" aria-hidden="true"></i> <input placeholder="Enter a street, area or city.." type="text" required />
                        </div>
                    </div>

                    <div class="budget-and-filter">
                        <button class="peremeter-btn"><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Neighborhood</a></button>

                        <button class="peremeter-btn"><a href="#"><i class="fa fa-calendar-o" aria-hidden="true"></i> Move Date</a></button>

                        <button class="peremeter-btn"><a href="#"><i class="fa fa-clock-o" aria-hidden="true"></i> Any</a></button>

                        <button class="peremeter-btn"><a href="#"><i class="fa fa-money" aria-hidden="true"></i> Budget</a></button>

                        <button class="peremeter-btn"><a href="#"><i class="fa fa-filter" aria-hidden="true"></i> More Filters</a></button>
                    </div>

                    <div class="peremeter-img">
                        <img src={peremeterPage} alt="Picture of rent" />
                    </div>
                </div>

                <div class="right-side-google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29215.25410027112!2d90.36756249999999!3d23.75070405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1662980320131!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default ForRent;