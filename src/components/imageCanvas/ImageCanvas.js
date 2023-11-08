import React from 'react';
// import './ImageCanvas.scss';
import imagePlaceholder from '../../images/placeholder.jpg';

const ImageCanvas = props => {

    const { 
        width = 285,
        height = 215,
        imageUrlDesktop = imagePlaceholder,
        imageUrlMobile = imageUrlMobile ? imageUrlMobile : imageUrlDesktop,
        imageAlt = 'Thumbnail',
        className
    } = props;


    return (
        <div className={`component-image-canvas ${ className ? className : ''}`}>

            <canvas className="component-image-canvas__canvas" width={width} height={height}></canvas>

            {/* Desktop Image */}
            <img className="component-image-canvas__image d-none d-lg-block" src={imageUrlDesktop} alt={imageAlt}/>

            {/* Mobile Image */}
            <img className="component-image-canvas__image d-block d-lg-none" src={imageUrlMobile} alt={imageAlt}/>

        </div>
    );
    

};

export default ImageCanvas;