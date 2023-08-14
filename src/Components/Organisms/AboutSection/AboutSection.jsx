import React from 'react';
import './AboutSection.css';
import { Button } from '../../Atoms/Button/Button';

export default function AboutSection() {
    return (
        <div style={{ marginTop: '220px' }} className='about-container'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img
                    src='https://techcrunch.com/wp-content/uploads/2017/05/joe-eazor-portrait.jpg'
                    alt=''
                    style={{ height: '90px', width: '90px', borderRadius: '50px' }}
                />
                <p style={{ fontSize: '30px' }}>
                    Nav
                    <span style={{ color: '#39CAD3', fontWeight: '300' }}> Dhamrait</span>
                </p>
                {/* social icons go here */}
                <Button
                    title={'Download CV'}
                    fontSize={'12px'}
                    backgroundColor='#39CAD3'
                    width='90px'
                    marginTop={'10px'}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '24px' }}>About</p>
                <div className='active' style={{ width: '62px', marginBottom: '10px' }} />
                <p style={{ width: '410px' }}>
                    I am a self-taught Full-Stack Developer, but more emphasis with Front-End
                    Development with industry experience building websites and web applications. I
                    specialize in JavaScript and have professional experience working with React JS.
                    I also have experience working with Angular, HTML5, CSS3, TypeScript and React
                    Native. I'm here to help you transform your digital dreams into reality. With a
                    passion for innovation and a commitment to delivering outstanding results, I
                    offer a comprehensive range of services tailored to your specific needs.
                </p>
            </div>
        </div>
    );
}
