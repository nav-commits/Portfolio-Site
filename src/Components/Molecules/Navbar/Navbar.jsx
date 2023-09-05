import React, { useState } from 'react';
import './Navbar.css';
import { labelsNavBar } from '../../../Utils/Navbar';
import { Link } from 'react-scroll';
import ActiveLine from '../../Atoms/ActiveLine/ActiveLine';


export default function Navbar() {
    const [labelName, setLabel] = useState('Home');
    const checkLabel = (menuTitle) => {
        setLabel(menuTitle);
    };
    return (
        <ul className={'nav-links'}>
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
                    {labelName === label ? <ActiveLine marginTop={'2px'} height={'3.5px'} /> : null}
                </li>
            ))}
        </ul>
    );
}
