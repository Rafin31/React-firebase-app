import './Service.css'
import React, { useEffect, useState } from 'react';
import { faBookmark, faShieldHalved, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('Data/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data);
    return (
        <div className="container-fluid service__section">
            <div className='services__great__wrapper' id='services'>
                <div className="container">
                    <div className="row justify-content-center gy-5">
                        <div className="col-12 text-center">
                            <p className="smallHeading"> <FontAwesomeIcon icon={faBookmark} /> Why we are the best for you?</p>
                            <p className="largeHeading">We provide best services</p>
                        </div>
                        {
                            data.map(({ id, Title, description, price, Features }) => {
                                return (

                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className={`card rounded-lg serviceCard service_${id}`} data-aos="fade-up"
                                            data-aos-anchor-placement="center-bottom">
                                            <div className="card-body">
                                                <div className="cardBodyWrapper">

                                                    <p className='service__title  text-center'>{Title}</p>

                                                    <div className="servicePrice mb-5">
                                                        <p>Only on <span className='price'>${price}</span></p>
                                                    </div>

                                                    <p className='service__description text-center'>
                                                        {
                                                            description.length > 150 ?
                                                                description.slice(0, 150).concat("...") :
                                                                description
                                                        }
                                                    </p>




                                                    <div className="serviceLists">
                                                        <ul>
                                                            <li> <FontAwesomeIcon icon={faShieldHalved} /> Maximum Game  :  {Features?.Maximum_game}</li>
                                                            <li> <FontAwesomeIcon icon={faShieldHalved} /> Total Hour   : {Features?.Total_hour}</li>
                                                            <li> <FontAwesomeIcon icon={faShieldHalved} /> Rank Push :      {Features?.Rank_Push}</li>

                                                        </ul>
                                                    </div>

                                                </div>

                                                <div className="row gy-3 serviceButtonsWrapper">

                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <button className="servicesDetailsButton">Details</button>

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <button className="servicesButton">
                                                            Purchase  <FontAwesomeIcon icon={faArrowRightLong} />
                                                        </button>
                                                    </div>


                                                </div>








                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Service;