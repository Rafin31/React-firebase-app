import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone, faMailBulk, faAddressCard, faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import logo from '../Assets/logo.PNG'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid footerWrapper'>

            <div className="container" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-6 col-12">
                        <p className="footerSectionTitle Logo">
                            <img src={logo} alt="" srcset="" />
                        </p>
                        <p className='footerTitle'>Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <p className="footerSectionTitle">Navigation</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} /> <Link to={'/home'}>Home</Link>  </li>
                            <li><FontAwesomeIcon icon={faCheck} /> <Link to={'/home'}>Services</Link>  </li>
                            <li><FontAwesomeIcon icon={faCheck} /> <Link to={'/home'}>About Us</Link>   </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <p className="footerSectionTitle">Contact Information</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} /> +88 01860958541</li>
                            <li><FontAwesomeIcon icon={faMailBulk} /> asifhossain976@gmail.com</li>
                            <li><FontAwesomeIcon icon={faAddressCard} /> Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <p className="footerSectionTitle">Opineing Time</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faClock} /> Mon-Fri: 9:30am - 21:00pm</li>
                            <li><FontAwesomeIcon icon={faClock} /> Sat: 10:00am - 15:00pm </li>
                            <li><FontAwesomeIcon icon={faClock} /> On Public Holidays: Closed</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="copyright">{`Copyright © ${new Date().getFullYear()} Asif H Rafin | Powered by Dota-2 Coaching`}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;