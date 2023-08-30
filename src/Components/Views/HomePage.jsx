import React,{useState} from 'react';
import NavbarContent from '../Organisms/NavbarContent/NavbarContent';
import NavBioFormSection from '../Organisms/NavBioFormSection/NavBioFormSection';
import AboutSection from '../Organisms/AboutSection/AboutSection';
import TechSection from '../Organisms/TechSection/TechSection';
import ProjectsSection from '../Organisms/ProjectsSection/ProjectsSection';
import ServicesSection from '../Organisms/ServicesSection/ServicesSection';
import FooterSection from '../Organisms/FooterSection/FooterSection';
export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <React.Fragment>
            <NavbarContent isOpen={isOpen} toggleMenu={toggleMenu} />
            {/* placeholder slider will be recoded */}
            {isOpen ? <div style={{ padding: '20px', height: '250px', backgroundColor: 'white', border: '1px solid lightgrey', width: '300px' }}>
                <ul style={{ listStyle: 'none', margin: '10px' }}>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                </ul>
            </div> : null }
            <NavBioFormSection />
            <AboutSection />
            <TechSection />
            <ProjectsSection />
            <ServicesSection />
            <FooterSection />
        </React.Fragment>
    );
}
