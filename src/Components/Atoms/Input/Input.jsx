import React from 'react';

export default function Input({ name, padding, onChange, width, height }) {
    return (
        <input
            onChange={onChange}
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
