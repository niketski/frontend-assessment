import React, { useState } from 'react';

// libraries
import { useTypewriter, Cursor } from 'react-simple-typewriter'

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
        subtitle,
        isTypeWriterEffectEnabled = false
    } = props;

    const [isDoneTyping, setIsDoneTypeing] = useState(false);
    const showCursor = isTypeWriterEffectEnabled && !isDoneTyping;
    const hasContent = title || subtitle ? true : false;
    let bannerTitle = title;

    if(isTypeWriterEffectEnabled) {
        
        
        const [text, helper] = useTypewriter({
            words: [title],
            loop: 1,
            typeSpeed: 170,
            onLoopDone: () => {
                setIsDoneTypeing(true);
            }
        });

        bannerTitle = text;

    }

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
                            {title && <h1> {bannerTitle} { showCursor && <Cursor cursorStyle="_"/> }</h1>}
                            {subtitle && <p>{subtitle}</p>}
                        </div>
                    </div>
            }
            

        </div>
    );

};

export default Banner;