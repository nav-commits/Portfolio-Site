import React from 'react'
import ActiveLine from '../../Atoms/ActiveLine/ActiveLine'
import '../ServicesSection/ServicesSection.css'

export default function ServicesSection() {
    return (
        <div id='Services' className='services-section-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='services-content-container'>
                    <p className='services-title'>Services </p>
                    <ActiveLine width={'110px'} marginTop={'2px'} />
                </div>
            </div>
        </div>
    )
}
