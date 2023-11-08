import React from 'react';

// assets
import contentImage from '../../../images/content-image.jpg';

// reused components
import Card from '../../card/Card';

// default card placeholders
const cards = [
    {
        imageUrl: contentImage,
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        link: '/',
    },
    {
        imageUrl: contentImage,
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/',
    },
    {
        imageUrl: contentImage,
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        link: '/',
    }
];

const CardList = props => {
    const { className } = props;

    return (
        <div className={`component-card-list ${className ? className : ''}`}>
            <div className="row component-card-list__row">
                {   
                    cards &&

                        cards.map((card, index) => {
                            const { imageUrl, textContent, link } = card;

                            return (
                                <div key={index} className="col-md-6 col-lg-4 component-card-list__card-item">
                                    <Card
                                        className="component-card-list__card"
                                        imageUrl={imageUrl}
                                        textContent={textContent}
                                        link={link}/>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );

};

export default CardList;