import React from 'react';
import './Navbar.css';
import { labelsNavBar } from '../../../Utils/Navbar';
import { useState } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(true);
    const [labelName, setLabel] = useState('Home');

    const checkLabel = (menuTitle) => {
        switch (menuTitle) {
            case 'Home':
                setLabel('Home');
                setActive(true);
                break;
            case 'About':
                setLabel('About');
                setActive(true);
                break;
            case 'Services':
                setLabel('Services');
                setActive(true);
                break;
            case 'Technologies':
                setLabel('Technologies');
                setActive(true);
                break;
            case 'Contact':
                setLabel('Contact');
                setActive(true);
                break;
            default:
                setLabel('Home');
        }
    };
    return (
        <ul className='nav-links'>
            {labelsNavBar.map((label, idx) => (
                <React.Fragment key={idx}>
                    <li onClick={() => checkLabel(label)}>
                        <a href={'#'}>{label}</a>
                        <div className={active && labelName === label ? 'active' : null} />
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
}
