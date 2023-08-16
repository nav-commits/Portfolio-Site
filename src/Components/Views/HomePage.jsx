import React from 'react';
import NavbarContent from '../Organisms/NavbarContent/NavbarContent';
import NavBioFormSection from '../Organisms/NavBioFormSection/NavBioFormSection';
import AboutSection from '../Organisms/AboutSection/AboutSection';
import TechSection from '../Organisms/TechSection/TechSection';

export default function HomePage() {
    return (
        <React.Fragment>
            <NavbarContent />
            <NavBioFormSection />
            <AboutSection />
            <TechSection/>
        </React.Fragment>
    );
}
