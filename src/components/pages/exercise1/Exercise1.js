import React from 'react';
// import './Exercise1.scss';

// assets
import bannerImageDesktop from '../../../images/banner-image.jpg';
import bannerImageMobile from '../../../images/banner-mobile.jpg';


// reused components
import Banner from '../../banner/Banner';
import CardList from '../../containers/cardList/CardList';

const Exercise1 = () => {

    return (
        <div className="page-exercise-1">
            <section className="page-exercise-1__section-banner">
                <Banner 
                    imageUrlDesktop={bannerImageDesktop}
                    imageUrlMobile={bannerImageMobile}
                    imageAlt="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    title="Hello Developer!"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    isTypeWriterEffectEnabled={true}/>
            </section>

            <section className="page-exercise-1__section-cards">
                <div className="container">
                    <div className="section-cards__cards-wrapper">
                        <CardList />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exercise1;