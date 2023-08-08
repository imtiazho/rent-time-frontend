import React from 'react';
import './categories.css';
import CustomLink from '../CustomLink/CustomLink ';
import { Outlet } from 'react-router-dom';
import '../PostContainer/PostContainer.css';

const Catgories = () => {
    return (
        <div>
            <div className='container categories'>
                <CustomLink to='/' className='cate-btn'>Room</CustomLink>
                <CustomLink to='/roommates' className='cate-btn'>Roommates</CustomLink>
                <CustomLink to='/flat' className='cate-btn'>Flat</CustomLink>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Catgories;