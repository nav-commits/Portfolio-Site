import React from 'react';
import NavbarContent from '../Organisms/NavbarContent/NavbarContent';
import NavBioFormSection from '../Organisms/NavBioFormSection/NavBioFormSection';

export default function HomePage() {
    return (
        <React.Fragment>
            <NavbarContent />
            <NavBioFormSection/>
        </React.Fragment>
    );
}
