import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Testimonials from '../Testimonials/Testimonials ';
import Footer from '../Footer/Footer';
import Catgories from '../Catgories/Catgories';
import Pagination from '../Pagination/Pagination';


const Home = () => {
    return (
        <div>
            <TopBanner />
            <Catgories />
            <Pagination />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;