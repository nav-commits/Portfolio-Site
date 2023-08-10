import React from 'react';
import Logo from '../../Atoms/Logo/Logo';
import Name from '../../Atoms/Name/Name';
import './NameAndLogo.css';

export default function NameAndLogo() {
    return (
        <div className='name-logo-content'>
            <Logo />
            <Name title='Nav Dhamrait' />
        </div>
    );
}
