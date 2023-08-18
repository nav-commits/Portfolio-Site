import React, { useState } from 'react';
import './Navbar.css';
import { labelsNavBar } from '../../../Utils/Navbar';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [labelName, setLabel] = useState('Home');

    const checkLabel = (menuTitle) => {
        setLabel(menuTitle);
    };

    return (
        <ul className='nav-links'>
            {labelsNavBar.map((label, idx) => (
                <li key={idx}>
                    <Link
                        to={label}
                        smooth={true}
                        offset={200}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                        onClick={() => checkLabel(label)}
                    >
                        {label}
                    </Link>
                    <div className={labelName === label ? 'active' : null} />
                </li>
            ))}
        </ul>
    );
}

