import React from 'react';

// reused components
import CallToActionButton from '../callToActionButton/CallToActionButton';

const Home = () => {

    return (
        <div className="page-home">
            <section class="page-home__main-section">
                <div className="container">
                    <h1 className="mb-5 page-home__title">Front End <span>Assessment</span></h1>

                    <div className="page-home__cta-list">
                        <div className="row">
                            <div className="col-lg-6 page-home__cta_item">
                                <CallToActionButton link="/exercise-1" label="Exercise 1"/>
                            </div>
                            <div className="col-lg-6 page-home__cta_item">
                                <CallToActionButton link="/exercise-2" label="Exercise 2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default Home;