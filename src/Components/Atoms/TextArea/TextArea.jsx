import React from 'react';

export default function TextArea({ name }) {
    return (
        <textarea style={{
            borderRadius: '5px',
            padding: '8px',
            backgroundColor: 'lightgrey',
        }} id={name} name={name} rows="10" cols="50">
        </textarea>
    );
}
