import React from 'react';
import './Exercise1.scss';

// assets
import bannerImageDesktop from '../../../images/banner-image.jpg';
import bannerImageMobile from '../../../images/banner-mobile.jpg';

// reused components
import Banner from '../../banner/Banner';
import Card from '../../card/Card';

const Exercise1 = () => {
    return (
        <React.Fragment>

            <section className="section-banner">
                <Banner 
                    imageUrlDesktop={bannerImageDesktop}
                    imageUrlMobile={bannerImageMobile}
                    imageAlt="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    title="Hello Developer!"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
            </section>

            <section className="section-cards">
                <div className="container">
                    <div className="section-cards__cards-wrapper">
                        <div className="section-cards__cards-list row">
                            <div className="section-cards__card-item col-md-6 col-lg-4">
                                <Card
                                    className="section-cards__card"
                                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            </div>
                            <div className="section-cards__card-item col-md-6 col-lg-4">
                                <Card
                                    className="section-cards__card"
                                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            </div>
                            <div className="section-cards__card-item col-md-6 col-lg-4">
                                <Card
                                    className="section-cards__card"
                                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
};

export default Exercise1;