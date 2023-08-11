import React from 'react';
import NavBioSection from '../../Molecules/NavBioSection/NavBioSection';

export default function NavBioFormSection() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginRight: '70px'

            }}
        >
            <NavBioSection />
            {/* the form will come below here */}
            <div>hello world</div>
        </div>
    );
}
