import React from 'react';

const WaveAccent = props => {

    const { 
        color = '#FBBC04',
        path = 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z',
        verticalPosition = 'top',
        height = '353'
     } = props;

    const style = {
        top: verticalPosition === 'top' ? 0 : 'unset',
        bottom: verticalPosition === 'top' ? 'unset' : 0,
        transform: verticalPosition === 'top' ? 'unset' : 'rotate(180deg)',
    }


    return (
        <div className="component-wave-accent" style={style}>
            <svg style={{ height: height }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d={path} fill={color} className="shape-fill"></path>
            </svg>
        </div>
    );
};

export default WaveAccent;

