import React from 'react';
import man1 from '../../media/man1.jpg';
import Footer from '../Footer/Footer';
import image1 from '../../media/roomate-1.jpg';
import image2 from '../../media/roomate-2.jpg';
import image3 from '../../media/roomate-3.jpg';
import image4 from '../../media/roomate-4.jpg';
import image5 from '../../media/roomate-5.jpg';
import image6 from '../../media/roomate-6.jpg';
import image7 from '../../media/roomate-7.jpg';
import image8 from '../../media/roomate-8.jpg';
import image9 from '../../media/roomate-9.jpg';
import { useParams } from 'react-router-dom';


const RoomMateDetails = () => {
    const { postId } = useParams();
    const roommates = [
        {
            _id: "01",
            roomImage1: image1,
            roomImage2: image2,
            roomImage3: image3,
            posterName: "Ali Haider",
            weekBudget: "500",
            ages: "23",
            avaiable: "12 Aug 2023",
            subDesc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...",
            avaiableFor: "7 Aug 2022 for 2 to 3 months",
            gender: "Male",
            Smoker: "Non-smoker",
            MainInterests: "Travel",
            Student: "Full Time",
            iportantPersonalQualities: "Honest and Good Sense of Humor",
            FoodSharingandFurniture: "I prefer not to share my foods. I like to have a furnished house.",
            RentBudget: "7000",
            BedroomType: "Share Bedroom",
            Balcony: "Attach balcony preferable",
            HomeSizes: "Any home size",
            BedroomSizes: "Single",
            BedroomFurniture: "Furnished",
            BathroomFacilities: "Shared Bathroom Okay",
            flatmateGender: "Males (student)",
            AgeGroup: "21 to 30 yrs",
            SmokingAtHome: "Non-smokers - Outdoors okay",
        },
        {
            _id: "02",
            roomImage1: image4,
            roomImage2: image5,
            roomImage3: image6,
            posterName: "Iftekhar Shihab",
            weekBudget: "500",
            ages: "23",
            avaiable: "12 Aug 2023",
            subDesc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...",
            avaiableFor: "7 Aug 2022 for 2 to 3 months",
            gender: "Male",
            Smoker: "Non-smoker",
            MainInterests: "Travel",
            Student: "Full Time",
            iportantPersonalQualities: "Honest and Good Sense of Humor",
            FoodSharingandFurniture: "I prefer not to share my foods. I like to have a furnished house.",
            RentBudget: "7000",
            BedroomType: "Share Bedroom",
            Balcony: "Attach balcony preferable",
            HomeSizes: "Any home size",
            BedroomSizes: "Single",
            BedroomFurniture: "Furnished",
            BathroomFacilities: "Shared Bathroom Okay",
            flatmateGender: "Males (student)",
            AgeGroup: "21 to 30 yrs",
            SmokingAtHome: "Non-smokers - Outdoors okay",
        },
        {
            _id: "03",
            roomImage1: image7,
            roomImage2: image8,
            roomImage3: image9,
            posterName: "Rashed D",
            weekBudget: "500",
            ages: "23",
            subDesc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...",
            avaiable: "12 Aug 2023",
            avaiableFor: "7 Aug 2022 for 2 to 3 months",
            gender: "Male",
            Smoker: "Non-smoker",
            MainInterests: "Travel",
            Student: "Full Time",
            iportantPersonalQualities: "Honest and Good Sense of Humor",
            FoodSharingandFurniture: "I prefer not to share my foods. I like to have a furnished house.",
            RentBudget: "7000",
            BedroomType: "Share Bedroom",
            Balcony: "Attach balcony preferable",
            HomeSizes: "Any home size",
            BedroomSizes: "Single",
            BedroomFurniture: "Furnished",
            BathroomFacilities: "Shared Bathroom Okay",
            flatmateGender: "Males (student)",
            AgeGroup: "21 to 30 yrs",
            SmokingAtHome: "Non-smokers - Outdoors okay",
        }
    ]
    const targetdPost = roommates.find(eachPost => eachPost._id === postId);
    ;
    return (
        <div>
            <div id="directory-and-item-details">
                <div class="container">
                    <div class="file-path">
                        <p><span><a href="">renttime </a></span> / <span><a href="">room-details</a></span></p>
                    </div>

                    <div class="sell-items-picture">
                        <img src={targetdPost.roomImage1} alt="Picture of sell items" />
                        <img src={targetdPost.roomImage2} alt="Picture of sell items" />
                        <img src={targetdPost.roomImage3} alt="Picture of sell items" />
                    </div>


                    <div class="sell-info">
                        <div class="name-request">
                            <h4>{targetdPost.posterName}</h4>
                            <div>
                                <form action="#" class="send-mail-form">
                                    <input type="email" class="form-control rounded-left" placeholder="Enter email address" required />
                                    <button type="submit"><a href="#"><i class="fa fa-paper-plane"></i></a></button>
                                </form>
                            </div>
                        </div>
                        <p class="online-status">Online: <span>Active</span></p>

                        <hr />

                        <div class="each-info">
                            <p class="name">Date Available</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.avaiableFor}</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Gender</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">One person. {targetdPost.gender} (str).</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Smoker</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.Smoker}</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Main interests</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.MainInterests}</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Student</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.Student}</p>
                        </div>

                    </div>


                    <div class="sell-info">
                        <div class="about-info">
                            <p class="about-person">Important Personal Qualities</p>
                            <p class="condition">{targetdPost.iportantPersonalQualities}</p>
                        </div>

                    </div>


                    <div class="sell-info">
                        <div class="about-info">
                            <p class="about-person">Food Sharing and Furniture</p>
                            <p class="condition">{targetdPost.FoodSharingandFurniture}</p>
                        </div>

                    </div>


                    <div class="search-preferance">
                        <h4>SEARCH PREFERENCES</h4>
                    </div>

                    <div class="sell-info">
                        <h5>Home Preferance</h5>

                        <div class="each-info">
                            <p class="name">Rent Budget</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">৳ {targetdPost.RentBudget} per month</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Bedroom Type</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.BedroomType}</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Balcony</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.Balcony}</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Home Sizes</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.HomeSizes}</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Bedroom Sizes</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.BedroomSizes}</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Bedroom Furniture</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.BedroomFurniture}</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Bathroom Facilities</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.BathroomFacilities}</p>
                        </div>
                    </div>


                    <div class="sell-info">
                        <h5>Flatmate Preferences</h5>

                        <div class="each-info">
                            <p class="name">Gender & Sexuality</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.flatmateGender} (student)</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Age Group</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.AgeGroup}</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Smoking at Home</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.SmokingAtHome}</p>
                        </div>
                    </div>


                    <div class="sell-info">
                        <h5>Location Preferences</h5>

                        <div class="all-location">
                            <div class="location">
                                <p> <span></span> Mohammadpur</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Shakar</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Rayer Bazaar</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Dhanmondi</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Zigatola</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Tollabag</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Kolabagan</p>
                            </div>

                            <div class="location">
                                <p> <span></span> shukrabad</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Tallioffice</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Geelong</p>
                            </div>

                            <div class="location">
                                <p> <span></span> kaderabudhousing</p>
                            </div>
                            <div class="location">
                                <p> <span></span> Poolpar</p>
                            </div>

                            <div class="location">
                                <p> <span></span> Niltalamondir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RoomMateDetails;