import React from 'react';
import { Button } from '../../Atoms/Button/Button';
import './NavBioSection.css';

export default function NavBioSection() {
    return (
        <div className='bio-container'>
            <p className='bio-header'>
                Hi, its Me Nav Dhamrait Im a <br />{' '}
                <span style={{ color: '#39CAD3', fontWeight: '300' }}>Full-Stack Developer</span>{' '}
            </p>
            <p className='bio-desc'>
                Hello there! I'm Nav Dhamrait, a highly skilled and experienced full-stack developer
                specializing in web development, mobile development, and UX front-end design.{' '}
            </p>
            <Button title='More About Me' backgroundColor='#39CAD3' width='90px' fontSize={'10px'} />
        </div>
    );
}
