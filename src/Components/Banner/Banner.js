
import React, { useEffect } from 'react';

import './Banner.css'

const Banner = () => {

    return (
        <>

            <div className="container-fluid banner__main__wrapper">
                <div className="container">

                    <div className="row banner__text__wrapper">
                        <div className="col-12 banner__text" >
                            <p className='banner__top__header' data-aos="fade-up"
                                data-aos-duration="3000"  >A MODERN <span>MULTIPLAYER</span>  MASTERPIECE</p>
                            <p className='banner__small__header' data-aos="fade-up"
                                data-aos-duration="3000" data-aos-delay="500" >Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be - start defending your ancient now.</p>
                            <br />
                            <button className='bannerButton' data-aos="fade-up"
                                data-aos-duration="3000" data-aos-delay="1000">Hire your Coach now !</button>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Banner;