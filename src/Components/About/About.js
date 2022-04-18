import React from 'react';
import './About.css'
import photo from '../Assets/Myphoto.jpg'

const About = () => {
    return (
        <div>
            <div className="container about">
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6">

                        <img className='img-fluid w-50' src={photo} alt="" />

                    </div>
                    <div className="col-12 col-lg-6 col-md-6">

                        <p className="aboutmetext">
                            Hello there! I am Asif Hossain (Rafin). A full-stack Developer and a Software Engineer. I have completed my Computer Science Graduation from American international University-Bangladesh (AIUB) located in Dhaka, Bangladesh.
                            Logical problem solving has always appealed to me and this explains my interests in mathematics, programming, and computing in general. Finally I found my passion in Web development and have been working in this field for almost 2+ years.
                            I have been building dynamic, scalable Web applications for local and foreign clients. I have a strong background in CRM, CMS, E-commerce, and developing large web applications. My expertise are PHP/Laravel and MERN stack development
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
