import React from 'react';

export default function Input({ name, padding }) {
    return (
        <input style={{ borderRadius: '15px', padding: padding, backgroundColor:'lightgrey' }} type='text' placeholder={name} />
    );
}
