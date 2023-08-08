import React from 'react';
import postPic from '../../media/man1.jpg';
import { Link } from 'react-router-dom';
import image1 from '../../media/roomate-1.jpg';
import image2 from '../../media/roomate-2.jpg';
import image3 from '../../media/roomate-3.jpg';
import image4 from '../../media/roomate-4.jpg';
import image5 from '../../media/roomate-5.jpg';
import image6 from '../../media/roomate-6.jpg';
import image7 from '../../media/roomate-7.jpg';
import image8 from '../../media/roomate-8.jpg';
import image9 from '../../media/roomate-9.jpg';

const Roommates = () => {
    const roommates = [
        {
            _id: "01",
            roomImage1: image1,
            roomImage2: image2,
            roomImage3: image3,
            posterName: "Abdullah Rafi",
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
            posterName: "Jahid Hasan",
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
            posterName: "Mohaiminul Islam",
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
    return (
        <section id="all-seller">
            <div class="container">
                {
                    roommates.map(eachPost =>
                        <Link to={`/roomates-details/${eachPost._id}`}>
                            <div class="seller">
                                <img src={eachPost.roomImage2} alt="Picture of sell Item" />

                                <h5>{eachPost.posterName}</h5>

                                <div class="price-and-ageOfPerson">
                                    <p>{eachPost.weekBudget} / Week</p>
                                    <p>{eachPost.ages} year old man</p>
                                </div>

                                <p>{eachPost.subDesc}</p>

                                <small>Avaiable from {eachPost.avaiable}</small>
                            </div>
                        </Link>)
                }
            </div>
        </section>
    );
};

export default Roommates;