import React from 'react';
import './Navbar.css'

export default function Navbar() {
    return (
        <ul className='nav-links'>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>About</a>
            </li>
            <li>
                {' '}
                <a href='#'>Services</a>
            </li>
            <li>
                {' '}
                <a href='#'>Technologies</a>
            </li>
            <li>
                {' '}
                <a href='#'>Contact</a>
            </li>
        </ul>
    );
}
