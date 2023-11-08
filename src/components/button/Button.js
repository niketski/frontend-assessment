import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {

    const { 

        children, 
        link, 
        className 
        
    } = props;

    let button = <button type="button" className={`component-button ${className}`}>{children}</button>;

    // change default button to a link if link is provided
    if(link) {

        button = <Link to={link} className={`component-button ${className}`}>{children}</Link>

    }

    return button;

};

export default Button;