import React, { useState } from 'react';
import Navbar from '../../Molecules/Navbar/Navbar';
import './NavbarContent.css';
import NameAndLogo from '../../Molecules/NameAndLogo/NameAndLogo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavbarContent({isOpen, toggleMenu}) {
    return (
        <nav className='nav-content'>
            <NameAndLogo />
            <Navbar />
            {isOpen ? (
                <CloseIcon className='menu-icon' onClick={toggleMenu} />
            ) : (
                <MenuIcon className='menu-icon' onClick={toggleMenu} />
            )}
        </nav>
    );
}
