import React from 'react';

// reused components
import ImageCanvas from '../imageCanvas/ImageCanvas';

const Banner = props => {

    const { 
        imageUrlDesktop,
        imageUrlMobile,
        imageAlt, 
        width = 1629, 
        height = 550,
        className, 
        title,
        subtitle
    } = props;

    const hasContent = title || subtitle ? true : false;

    return (
        <div className="component-banner">

            <ImageCanvas 
                className={`component-banner__image-canvas ${className ? className : ''}`}
                imageUrlDesktop={imageUrlDesktop}
                imageUrlMobile={imageUrlMobile}
                width={width}
                height={height}
                imageAlt={imageAlt}/>

            {
                hasContent && 

                    <div className="component-banner__content">
                        <div className="container">
                            {title && <h1>{title}</h1>}
                            {subtitle && <p>{subtitle}</p>}
                        </div>
                    </div>
            }
            

        </div>
    );

};

export default Banner;