import React from 'react';

export default function TechnologiesSection() {
    return (
        <div
            style={{
                backgroundColor: '#0F272F',
                height: '720px',
                width: '100%',
                marginTop: '60px',
                display: 'flex',
                justifyContent: 'center'
            }}
            id='Technologies'
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <p style={{ marginTop: '20px', color: 'white', fontSize: '25px' }}>Technologies </p>
                <div className='active' style={{ width: '145px', marginTop: '5px' }} />
            </div>
        </div>
    );
}
