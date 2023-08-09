import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import client1 from '../../media/user.jpg';
import client2 from '../../media/user-1.jpg';
import client3 from '../../media/user-2.jpg';
import client4 from '../../media/user-3.jpg';
import './Testimonials .css';

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className='swiper-wrapper-cus'
            >
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={client1} />
                            </div>

                            <div className="info">
                                <h4>Imtiaz Hossain</h4>
                                <cite>Dhaka, Dhanmondi.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Fast response, incredible service and good behavior. Work is up to the mark. Can communicate properly for better comprehension. Very much recommended. 👍</p>
                </SwiperSlide>

                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={client2} />
                            </div>

                            <div className="info">
                                <h4>Ali Haider Sami</h4>
                                <cite>Dhaka, Sultanganj.</cite>
                            </div>
                        </div>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <p>Remarkable service and upright behavior. Work is exceptionally good. Can communicate properly for betterment. Can work accordingly just like you wanted. worth it recommended. 🌼</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;