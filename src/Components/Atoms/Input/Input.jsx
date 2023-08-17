import React from 'react';

export default function Input({ name, padding, onChange, width, height, value }) {
    return (
        <input
            onChange={onChange}
            value={value}
            style={{
                borderRadius: '15px',
                padding: padding,
                backgroundColor: 'lightgrey',
                width: width,
                height: height,
            }}
            name={name}
            type='text'
        />
    );
}
