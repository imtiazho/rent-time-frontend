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

                    <p>ট্রাস্টেড এবং কোয়ালিটিফুল প্রোডাক্টের একটি উপমা এলিনার ক্লথিং। তাদের প্রোডাক্টে এবং ব্যাবহারে আমি আসলেই মুগ্ধ। ইনশাআল্লাহ এভাবেই কনসিসস্টেন্সি মেন্টেইন করে যাবেন। থ্যাংস। 👍</p>
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

                    <p>এলিনারের রেসপন্স এবং প্রোডাক্ট কোয়ালিটি দুটোই আলহামদুলিল্লাহ ভালো। থ্যাংক ইউ আপু। সবাই নিতে পারেন নিঃসন্দেহে অনেক ভালো প্রোডাক্ট। ভেরি মাচ রিকমেন্ডেড  🌼</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={client3} />
                            </div>

                            <div className="info">
                                <h4>Mehraab Hasan</h4>
                                <cite>Sylhet, Bangladesh.</cite>
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

                    <p>অনেক সুন্দর হইছে আপু, আমার বোনের জন্য নিয়েছিলাম তার অনেক পছন্দ হইছে, থ্যাংক ইউ আপু। সবাই নিতে পারেন নিঃসন্দেহে অনেক ভালো প্রোডাক্ট।</p>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className="head">
                        <div className="profile">
                            <div className="clientImage">
                                <img src={client4} />
                            </div>

                            <div className="info">
                                <h4>Rashed D</h4>
                                <cite>Lakshmipur, Bangladesh.</cite>
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

                    <p>এলিনার যেন খুবই দ্রুত ডেলিভারি এবং অথেনটিক সকল ড্রেসের সমাহার। আমি অনেক খুশী আপনাদের প্রোডাক্ট পেয়ে 😍</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;