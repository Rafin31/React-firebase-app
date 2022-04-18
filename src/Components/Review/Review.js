import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';


const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="reviewWrapper" >
                <div className="container">
                    <div className="row justify-content-center align-items-center" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <div className="col-12 text-center">
                            <p className="smallHeading"> <FontAwesomeIcon icon={faBookmark} /> What our customers said about us</p>
                            <p className="largeHeading">Our Customer Review</p>
                        </div>
                        <div className="col-lg-7 col-12 sliderWrapper">
                            <div>
                                <Slider {...settings}>
                                    <div className='sliderContainer'>
                                        <div className="card text-center ">
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                            <img className='reviewImg' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
                                            <p className="reviewDescripttion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis reiciendis minima, quia ducimus aspernatur quam iusto vero error porro!</p>
                                            <p className='reviewName'>Chris Patt</p>
                                            <span className='reviewStar'><FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /></span>
                                        </div>
                                    </div>
                                    <div className='sliderContainer'>
                                        <div className="card text-center">
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                            <img className='reviewImg' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
                                            <p className="reviewDescripttion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis reiciendis minima, quia ducimus aspernatur quam iusto vero error porro!</p>
                                            <p className='reviewName'>Chris Patt</p>
                                            <span className='reviewStar'><FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /></span>
                                        </div>
                                    </div>
                                    <div className='sliderContainer'>
                                        <div className="card text-center">
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                            <img className='reviewImg' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />
                                            <p className="reviewDescripttion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis reiciendis minima, quia ducimus aspernatur quam iusto vero error porro!</p>
                                            <p className='reviewName'>Chris Patt</p>
                                            <span className='reviewStar'><FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /></span>

                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;