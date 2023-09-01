import React, { useState } from 'react';
import NavbarContent from '../Organisms/NavbarContent/NavbarContent';
import NavBioFormSection from '../Organisms/NavBioFormSection/NavBioFormSection';
import AboutSection from '../Organisms/AboutSection/AboutSection';
import TechSection from '../Organisms/TechSection/TechSection';
import ProjectsSection from '../Organisms/ProjectsSection/ProjectsSection';
import ServicesSection from '../Organisms/ServicesSection/ServicesSection';
import FooterSection from '../Organisms/FooterSection/FooterSection';
import { useMediaQuery } from 'react-responsive';
import { labelsNavBar } from '../../Utils/Navbar';
import { Link } from 'react-scroll';
import ActiveLine from '../Atoms/ActiveLine/ActiveLine';

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [labelName, setLabel] = useState('Home');
    const checkLabel = (menuTitle) => {
        setLabel(menuTitle);
    };

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });
    console.log(isTabletOrMobile);
    return (
        <React.Fragment>
            <NavbarContent isTabletOrMobile={isTabletOrMobile} toggleMenu={toggleMenu} />
            {/* placeholder slider will be recoded */}
            {isOpen && isTabletOrMobile ? (
                <div
                    style={{
                        padding: '20px',
                        marginTop:'85px',
                        height: '100vh',
                        backgroundColor: 'white',
                        boxShadow:'2px 0 10px rgba(0, 0, 0, 0.2)',
                        width: '250px',
                        zIndex: '100',
                        position: 'fixed',
                        top: '0'
                    }}
                >
                    <ul className={'nav-links-mobile-tablet'}>
                        {labelsNavBar.map((label, idx) => (
                            <li key={idx}>
                                <Link
                                    to={label}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => checkLabel(label)}
                                >
                                    {label}
                                </Link>
                                {labelName === label ? (
                                    <ActiveLine
                                        marginTop={'2px'}
                                        height={'3.5px'}
                                        width={'100px'}
                                    />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
            <NavBioFormSection />
            <AboutSection />
            <TechSection />
            <ProjectsSection />
            <ServicesSection />
            <FooterSection />
        </React.Fragment>
    );
}
