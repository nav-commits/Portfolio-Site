import React from 'react';
import '../TechSection/TechSection.css';
export default function TechSection() {
    return (
        <div id='Technologies' className='tech-section-container'>
            <div className='tech-content-container'>
                <p className='tech-title'>Technologies </p>
                <div className='active' style={{ width: '145px', marginTop: '5px' }} />
            </div>
        </div>
    );
}
