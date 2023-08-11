import React from 'react';
import './Button.css';

export const Button = ({ title, backgroundColor, width }) => {
    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                width: width,
            }}
            className='button'
        >
            {title}
        </div>
    );
};
