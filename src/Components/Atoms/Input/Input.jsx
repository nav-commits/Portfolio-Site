import React from 'react';

export default function Input({ name, padding, onChange }) {
    return (
        <input
            onChange={onChange}
            style={{ borderRadius: '15px', padding: padding, backgroundColor: 'lightgrey' }}
            name={name}
            type='text'
        />
    );
}
