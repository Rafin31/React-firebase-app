import './Service.css'
import React, { useEffect, useState } from 'react';
import { faBookmark, faGamepad } from '@fortawesome/free-solid-svg-icons';
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
                    <div className="row gy-5">
                        <div className="col-12 text-center">
                            <p className="smallHeading"> <FontAwesomeIcon icon={faBookmark} /> Why we are the best for you?</p>
                            <p className="largeHeading">We provide best services</p>
                        </div>
                        {
                            data.map(({ id, Title, description, price, Features }) => {
                                return (

                                    <div className="col-lg-4 col-md-2 col-12">
                                        <div className={`card rounded-lg serviceCard service_${id}`} data-aos="fade-up"
                                            data-aos-duration="3000">
                                            <div className="card-body">
                                                <div className="cardBodyWrapper">
                                                    <p className='service__title  text-center'>{Title}</p>
                                                    <p className='service__description text-center'>{description}</p>




                                                    <div className="serviceLists">
                                                        <ul>
                                                            <li> <FontAwesomeIcon icon={faGamepad} /> Maximum Game  :  {Features?.Maximum_game}</li>
                                                            <li> <FontAwesomeIcon icon={faGamepad} /> Total Hour   : {Features?.Total_hour}</li>
                                                            <li> <FontAwesomeIcon icon={faGamepad} /> Rank Push :      {Features?.Rank_Push}</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <button className="servicesButton">Purchase Now!</button>






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