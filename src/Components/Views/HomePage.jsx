import React from 'react';
import NavbarContent from '../Organisms/NavbarContent/NavbarContent';
import NavBioFormSection from '../Organisms/NavBioFormSection/NavBioFormSection';
import AboutSection from '../Organisms/AboutSection/AboutSection';

export default function HomePage() {
    return (
        <React.Fragment>
            <NavbarContent />
            <NavBioFormSection />
            <AboutSection/>
        </React.Fragment>
    );
}
