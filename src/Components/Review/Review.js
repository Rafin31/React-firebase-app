import React from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


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
                        <div className="col-lg-7 col-12">
                            <div>
                                <Slider {...settings}>
                                    <div className='sliderContainer'>
                                        <div className="card">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id alias veniam dolores porro facilis aliquid totam perferendis labore corrupti!
                                        </div>
                                    </div>
                                    <div className='sliderContainer'>
                                        <div className="card">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id alias veniam dolores porro facilis aliquid totam perferendis labore corrupti!
                                        </div>
                                    </div>
                                    <div className='sliderContainer'>
                                        <div className="card">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id alias veniam dolores porro facilis aliquid totam perferendis labore corrupti!
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