import React from 'react';
import Navbar from '../../Molecules/Navbar/Navbar';
import Name from '../../Atoms/Name/Name';
import  './NavbarContent.css'

export default function NavbarContent() {
    return (
        <nav>
            <Name title='Nav Dhamrait' />
            <Navbar/>
        </nav>
    );
}
