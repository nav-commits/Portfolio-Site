import React from 'react';
import './Button.css';

export const Button = ({ title, backgroundColor, width, marginTop, fontSize, disabled }) => {
    return (
        <button
            style={{
                backgroundColor: backgroundColor,
                width: width,
                marginTop: marginTop,
                fontSize: fontSize
            }}
            className='button'
            disabled={disabled}
        >
            {title}
        </button>
    );
};
