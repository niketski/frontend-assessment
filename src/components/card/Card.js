import React from 'react';

// assets
import imagePlaceholder from '../../images/placeholder.jpg';

// reused components
import ImageCanvas from '../imageCanvas/ImageCanvas';
import Button from '../button/Button';

const Card = props => {
    const {
        imageUrl = imagePlaceholder,
        imageAlt,
        link = '/',
        textContent,
        buttonLabel = 'Read more',
        hasButton = true,
        className
    } = props;

    return (
        <div className={`component-card rounded-2 ${className ? className : ''}`}>
            <ImageCanvas
                className="component-card__card-image rounded-2 mb-3"
                imageUrlDesktop={imageUrl}
                alt={imageAlt}
                width="284"
                height="215"/>

            <div className="component-card__card-body">
                <div className="component-card__card-text text-center">
                    {textContent && <p>{textContent}</p>}
                </div>
               
                {
                    hasButton && 

                        <div className="component-card__card-cta pt-3">
                            <Button link={link} className="component-card__button">{buttonLabel}</Button>
                        </div>
                }
                
            </div>
        </div>
    );
};

export default Card;