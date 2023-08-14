import React from 'react';
import NavBioSection from '../../Molecules/NavBioSection/NavBioSection';

export default function NavBioFormSection() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                gap: '100px'
            }}
        >
            <NavBioSection />
            {/* the form will come below here */}
            <div style={{ backgroundColor: '#000000', padding: '20px', borderRadius: '3px', width: '390px', marginTop: '15px', }}>
                <p style={{ color: '#FFFFFF', fontSize: '10px', textAlign: 'center' }}>Have questions or want to work together?</p>
                <label style={{ color: '#FFFFFF', fontSize: '10px' }} htmlFor="">Name</label>
                <input type="text" name="" id="" />
            </div>
        </div>
    );
}
