import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionButton = props => {
    const { link, label, className } = props;

    return (
        <div className="component-call-to-action">
            <Link to={link} className="component-call-to-action__button">
                <h3 className="component-call-to-action__label">{label}</h3> 
                <svg className="component-call-to-action__icon" 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    viewBox="0 0 320 512">
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                </svg>
            </Link>
        </div>
    );
}

export default CallToActionButton;