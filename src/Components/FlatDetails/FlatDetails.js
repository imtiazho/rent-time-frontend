import React from 'react';
import pic from '../../media/Pics1.jpg';
import './FlatDetails.css';
import { useParams } from 'react-router-dom';
import image1 from '../../media/flat-1.jpg';
import image2 from '../../media/flat-2.jpg';
import image3 from '../../media/flat-3.jpg';
import image4 from '../../media/flat-4.jpg';
import image5 from '../../media/flat-5.jpg';
import image6 from '../../media/flat-6.jpg';
import image7 from '../../media/flat-7.jpg';
import image8 from '../../media/flat-8.jpg';
import image9 from '../../media/flat-9.jpg';

const FlatDetails = () => {
    const { postId } = useParams();
    const flats = [
        {
            _id: "01",
            flatImage1: image1,
            flatImage2: image2,
            flatImage3: image3,
            location: "Dhaka, Dhanmondi",
            flat: "Full Flat",
            bedroom: "3",
            bathroom: "3",
            belcony: "4",
            availablefrom: "12 feb 2023",
            FlatSize: "1500 sq feet",
            FlatOwnerPersonalQualities: "Honest and Good Sense of Humor",
            Furniture: "All furniture must be brought.",
            FlatBudget: "20000",
            BedroomType: "Private Bedroom",
            Kitchen: "1",
            DiningandDrawing: "Open Space",
            BalconyDetails: "3 Attach and 1 common balcony",
            BedroomSizes: "2 dubble bed and one single bed",
            PeopleQualities: "Maximum 6 person",
            AgeGroup: "Any",
            Abouttheproperty: [
                "FEMALES ONLY YOUR OWN PRIVATE ROOM AND OWN BATHROOM",
                "Amazing room in a 3 bedroom property with your own bathroom and toilet. Tranquil and calm, with beautiful trees around and immaculately clean. You will be sharing with me who loves the town house so much. I want to create a relaxed vibe however love my free space too. Personally I love fitness and anything health wise.",
                "Also there is an amazing deck which you can relax outside on.",
                "It’s super chill especially in the morning with the birds. You will love the feel of this well presented home and your personal bathroom is really nice. The whole place has aircon and all new kitchen appliances.",
                "Minimum stay 2months",
                "Any questions please mail me Thankyouuuuuu :3"
            ]

        },
        {
            _id: "02",
            flatImage1: image4,
            flatImage2: image5,
            flatImage3: image6,
            location: "Dhaka, Dhanmondi",
            flat: "Full Flat",
            bedroom: "3",
            bathroom: "3",
            belcony: "4",
            availablefrom: "12 feb 2023",
            FlatSize: "1500 sq feet",
            FlatOwnerPersonalQualities: "Honest and Good Sense of Humor",
            Furniture: "All furniture must be brought.",
            FlatBudget: "20000",
            BedroomType: "Private Bedroom",
            Kitchen: "1",
            DiningandDrawing: "Open Space",
            BalconyDetails: "3 Attach and 1 common balcony",
            BedroomSizes: "2 dubble bed and one single bed",
            PeopleQualities: "Maximum 6 person",
            AgeGroup: "Any",
            Abouttheproperty: [
                "FEMALES ONLY YOUR OWN PRIVATE ROOM AND OWN BATHROOM",
                "Amazing room in a 3 bedroom property with your own bathroom and toilet. Tranquil and calm, with beautiful trees around and immaculately clean. You will be sharing with me who loves the town house so much. I want to create a relaxed vibe however love my free space too. Personally I love fitness and anything health wise.",
                "Also there is an amazing deck which you can relax outside on.",
                "It’s super chill especially in the morning with the birds. You will love the feel of this well presented home and your personal bathroom is really nice. The whole place has aircon and all new kitchen appliances.",
                "Minimum stay 2months",
                "Any questions please mail me Thankyouuuuuu :3"
            ]

        },
        {
            _id: "03",
            flatImage1: image7,
            flatImage2: image8,
            flatImage3: image9,
            location: "Dhaka, Dhanmondi",
            flat: "Full Flat",
            bedroom: "3",
            bathroom: "3",
            belcony: "4",
            availablefrom: "12 feb 2023",
            FlatSize: "1500 sq feet",
            FlatOwnerPersonalQualities: "Honest and Good Sense of Humor",
            Furniture: "All furniture must be brought.",
            FlatBudget: "20000",
            BedroomType: "Private Bedroom",
            Kitchen: "1",
            DiningandDrawing: "Open Space",
            BalconyDetails: "3 Attach and 1 common balcony",
            BedroomSizes: "2 dubble bed and one single bed",
            PeopleQualities: "Maximum 6 person",
            AgeGroup: "Any",
            Abouttheproperty: [
                "FEMALES ONLY YOUR OWN PRIVATE ROOM AND OWN BATHROOM",
                "Amazing room in a 3 bedroom property with your own bathroom and toilet. Tranquil and calm, with beautiful trees around and immaculately clean. You will be sharing with me who loves the town house so much. I want to create a relaxed vibe however love my free space too. Personally I love fitness and anything health wise.",
                "Also there is an amazing deck which you can relax outside on.",
                "It’s super chill especially in the morning with the birds. You will love the feel of this well presented home and your personal bathroom is really nice. The whole place has aircon and all new kitchen appliances.",
                "Minimum stay 2months",
                "Any questions please mail me Thankyouuuuuu :3"
            ]

        }
    ]
    const targetdPost = flats.find(eachPost => eachPost._id === postId);
    ;
    return (
        <div>
            <div id="directory-and-item-details">
                <div class="container">
                    <div class="file-path">
                        <p><span><a>renttime </a></span> / <span><a> flat</a></span></p>
                    </div>

                    <div class="sell-items-picture">
                        <img src={targetdPost.flatImage1} alt="Picture of sell items" />
                        <img src={targetdPost.flatImage2} alt="Picture of sell items" />
                        <img src={targetdPost.flatImage3} alt="Picture of sell items" />
                    </div>


                    <div class="sell-info">
                        <div class="name-request">
                            <h4>{targetdPost.location}</h4>
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
                            <p class="condition">{targetdPost.availablefrom}</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Flat Size</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.FlatSize}</p>
                        </div>

                    </div>


                    <div class="sell-info">
                        <div class="about-info">
                            <p class="about-person">Flat Owner Personal Qualities</p>
                            <p class="condition">{targetdPost.FlatOwnerPersonalQualities}</p>
                        </div>

                    </div>


                    <div class="sell-info">
                        <div class="about-info">
                            <p class="about-person">Furniture</p>
                            <p class="condition">{targetdPost.Furniture}</p>
                        </div>

                    </div>


                    <div class="search-preferance">
                        <h4>SEARCH PREFERENCES</h4>
                    </div>

                    <div class="sell-info">
                        <h5>Home Preferance</h5>

                        <div class="each-info">
                            <p class="name">Flat Budget</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">৳ {targetdPost.FlatBudget} per month *Bills not included in flat</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Bedroom Type</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.BedroomType}</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Bed</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.bedroom} Bedroom</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Bathroom</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.bathroom} Bathroom</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Kitchen</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.Kitchen} Kitchen</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Dining and Drawing</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.DiningandDrawing}</p>
                        </div>

                        <div class="each-info">
                            <p class="name">Balcony</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.BalconyDetails}</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Bedroom Sizes</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.BedroomSizes}</p>
                        </div>

                    </div>



                    <div class="sell-info">
                        <h5>Qualities and Ages</h5>

                        <div class="each-info">
                            <p class="name">People Qualities</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">Maximum {targetdPost.PeopleQualities} person</p>
                        </div>


                        <div class="each-info">
                            <p class="name">Age Group</p>
                            <p class="semi-colon">:</p>
                            <p class="condition">{targetdPost.AgeGroup}</p>
                        </div>

                    </div>


                    <div class="sell-info">
                        <h5 class="about-props-head about-props">About the property</h5>

                        <p class="about-props">{targetdPost.Abouttheproperty[0]}</p>
                        <p class="about-props">{targetdPost.Abouttheproperty[1]}</p>
                        <p class="about-props">{targetdPost.Abouttheproperty[2]}</p>
                        <p class="about-props">{targetdPost.Abouttheproperty[3]}</p>
                        <p class="about-props">{targetdPost.Abouttheproperty[4]}</p>
                        <p class="about-props">{targetdPost.Abouttheproperty[5]}</p>
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
        </div>
    );
};

export default FlatDetails;