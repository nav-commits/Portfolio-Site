import React from 'react';
import './Navbar.css';
import { labelsNavBar } from '../../../Utils/Navbar';

export default function Navbar() {
    return (
        <ul className='nav-links'>
            {labelsNavBar.map((label, idx) => (
                <React.Fragment key={idx}>
                    <li>
                        <a href='#'>{label}</a>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
}
