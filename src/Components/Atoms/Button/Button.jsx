import React from 'react';

export const Button = ({ title, backgroundColor, width }) => {
    return (
        <div
            style={{
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: backgroundColor,
                width: width,
            }}
        >
            {title}
        </div>
    );
};
