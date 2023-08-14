import React from 'react';
import { Button } from '../../Atoms/Button/Button';

export default function NavBioSection() {
    return (
        <div style={{ marginTop: '120px' }}>
            <p style={{ marginBottom: '10px', fontSize: '20px' }}>
                Hi, its Me Nav Dhamrait Im a <br />{' '}
                <span style={{ color: '#39CAD3', fontWeight: '300' }}>Full-Stack Developer</span>{' '}
            </p>
            <p style={{ width: '250px', fontSize: '13px', marginBottom: '10px' }}>
                Hello there! I'm Nav Dhamrait, a highly skilled and experienced full-stack developer
                specializing in web development, mobile development, and UX front-end design.{' '}
            </p>
            <Button title='More About Me' backgroundColor='#39CAD3' width='80px' />
        </div>
    );
}
