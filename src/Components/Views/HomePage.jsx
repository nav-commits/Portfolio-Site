import React from 'react';
import NavbarContent from '../Organisms/NavbarContent/NavbarContent';
import NavBioFormSection from '../Organisms/NavBioFormSection/NavBioFormSection';
import AboutSection from '../Organisms/AboutSection/AboutSection';
import TechnologiesSection from '../Organisms/TechnolgiesSection/TechnologiesSection';

export default function HomePage() {
    return (
        <React.Fragment>
            <NavbarContent />
            <NavBioFormSection />
            <AboutSection />
            <TechnologiesSection/>
        </React.Fragment>
    );
}
