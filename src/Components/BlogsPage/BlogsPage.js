import React from 'react';
import './BlogsPage.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import blog1 from '../../media/blog-1.jpg';
import blog2 from '../../media/blog-2.jpg';
import blog3 from '../../media/blog-3.jpg';
import blog4 from '../../media/blog-4.jpg';
import blog5 from '../../media/blog-5.jpg';
import blog6 from '../../media/blog-6.jpg';
import blog7 from '../../media/blog-7.jpg';
import blog8 from '../../media/blog-8.jpg';
import blog9 from '../../media/blog-9.jpg';

const BlogsPage = () => {
    return (
        <div>
            <section id="blogs">
                <div class="container">
                    <div class="img-details">
                        <img src={blog9} alt="Picture of blogs" />

                        <div class="details">
                            <h5>Roommate Etiquette 101</h5>
                            <small>July 12. 2022</small>
                            <p><Link to='/blogs-details'>See More</Link></p>
                        </div>
                    </div>

                    <div class="img-details">
                        <img src={blog5} alt="Picture of blogs" />

                        <div class="details">
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                            <small>July 12. 2022</small>
                            <p><Link to="/blogs-details">See More</Link></p>
                        </div>
                    </div>
                    <div class="img-details">
                        <img src={blog3} alt="Picture of blogs" />

                        <div class="details">
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                            <small>July 12. 2022</small>
                            <p><Link to="/blogs-details">See More</Link></p>
                        </div>
                    </div>

                    <div class="img-details">
                        <img src={blog8} alt="Picture of blogs" />

                        <div class="details">
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                            <small>July 12. 2022</small>
                            <p><Link to="/blogs-details">See More</Link></p>
                        </div>
                    </div>
                    <div class="img-details">
                        <img src={blog7} alt="Picture of blogs" />

                        <div class="details">
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                            <small>July 12. 2022</small>
                            <p><Link to="/blogs-details">See More</Link></p>
                        </div>
                    </div>

                    <div class="img-details">
                        <img src={blog6} alt="Picture of blogs" />

                        <div class="details">
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                            <small>July 12. 2022</small>
                            <p><Link to="/blogs-details">See More</Link></p>
                        </div>
                    </div>
                </div>

                <div id="recent-posts">
                    <h3>Recent Post</h3>
                    <div class="container">
                        <div class="img-details">
                            <img src={blog2} alt="Picture of blogs" />

                            <div class="details">
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                                <small>July 12. 2022</small>
                                <p><Link to="/blogs-details">See More</Link></p>
                            </div>
                        </div>
                        <div class="img-details">
                            <img src={blog4} alt="Picture of blogs" />

                            <div class="details">
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                                <small>July 12. 2022</small>
                                <p><Link to="/blogs-details">See More</Link></p>
                            </div>
                        </div>

                        <div class="img-details">
                            <img src={blog1} alt="Picture of blogs" />

                            <div class="details">
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi?</h5>
                                <small>July 12. 2022</small>
                                <p><Link to="/blogs-details">See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BlogsPage;