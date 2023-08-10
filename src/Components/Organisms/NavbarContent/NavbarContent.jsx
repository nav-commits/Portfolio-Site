import React from 'react';
import Navbar from '../../Molecules/Navbar/Navbar';
import './NavbarContent.css'
import NameAndLogo from '../../Molecules/NameAndLogo/NameAndLogo';

export default function NavbarContent() {
    return (
        <nav className='nav-content'>
            <NameAndLogo />
            <Navbar />
        </nav>
    );
}
