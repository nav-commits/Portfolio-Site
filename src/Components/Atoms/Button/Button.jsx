import React from 'react';
import './Button.css';

export const Button = ({ title, backgroundColor, width, marginTop, fontSize, disabled, onClick }) => {
    return (
        <button
            onClick={onClick}
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
