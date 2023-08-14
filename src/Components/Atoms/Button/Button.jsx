import React from 'react';
import './Button.css';

export const Button = ({ title, backgroundColor, width, marginTop, fontSize }) => {
    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                width: width,
                marginTop: marginTop,
                fontSize: fontSize
            }}
            className='button'
        >
            {title}
        </div>
    );
};
