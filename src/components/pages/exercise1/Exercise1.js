import React from 'react';
// import './Exercise1.scss';

// assets
import bannerImageDesktop from '../../../images/banner-image.jpg';
import bannerImageMobile from '../../../images/banner-mobile.jpg';


// reused components
import Banner from '../../banner/Banner';
import CardList from '../../containers/cardList/CardList';
import WaveAccent from '../../waveAccent/WaveAccent';

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
                <WaveAccent path="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"/>
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