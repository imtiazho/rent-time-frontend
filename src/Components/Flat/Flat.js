import React from 'react';
import postPic from '../../media/man1.jpg';
import { Link } from 'react-router-dom';
import image1 from '../../media/flat-1.jpg';
import image2 from '../../media/flat-2.jpg';
import image3 from '../../media/flat-3.jpg';
import image4 from '../../media/flat-4.jpg';
import image5 from '../../media/flat-5.jpg';
import image6 from '../../media/flat-6.jpg';
import image7 from '../../media/flat-7.jpg';
import image8 from '../../media/flat-8.jpg';
import image9 from '../../media/flat-9.jpg';

const Flat = () => {
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

    return (
        <section id="all-seller">
            <div class="container">
                {
                    flats.map(eachFlat => <Link to={`/flat-details/${eachFlat._id}`}>
                        <div class="seller">
                            <img src={eachFlat.flatImage1} alt="Picture of sell Item" />

                            <h5>{eachFlat.location}</h5>

                            <div class="price-and-ageOfPerson">
                                <p>{eachFlat.FlatBudget}/montht=y</p>
                                <p>{eachFlat.flat}</p>
                            </div>

                            <div class="find-house-post">
                                <span>
                                    <span><i class="fa fa-bed" aria-hidden="true"></i></span>
                                    <span>{eachFlat.bedroom}</span>
                                </span>

                                <span>
                                    <span><i class="fa fa-bath" aria-hidden="true"></i></span>
                                    <span>{eachFlat.bathroom}</span>
                                </span>
                                <span>
                                    <span><i class="fa fa-trello" aria-hidden="true"></i></span>
                                    <span>{eachFlat.belcony}</span>
                                </span>

                            </div>

                            <small>{eachFlat.availablefrom}</small>
                        </div>
                    </Link>)
                }
            </div>
        </section>
    );
};

export default Flat;