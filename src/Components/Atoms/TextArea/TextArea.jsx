import React from 'react';

export default function TextArea({ name, value, onChange }) {
    return (
        <textarea value={value} onChange={onChange} style={{
            borderRadius: '5px',
            padding: '8px',
            backgroundColor: 'lightgrey',
        }} id={name} name={name} rows="10" cols="50">
        </textarea>
    );
}
