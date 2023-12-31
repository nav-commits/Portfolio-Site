import React from 'react';
import './AboutSection.css';
import { Button } from '../../Atoms/Button/Button';
import logo from '../../../Images/20180222_115031.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from '../../../Resume/Nav_DhamraitResume.pdf';
import ActiveLine from '../../Atoms/ActiveLine/ActiveLine';

export default function AboutSection() {
    return (
        <div className='about-container' id='About'>
            <div className='personal-profile'>
                <img src={logo} alt='profile' className='profile-image' />
                <p className='name-text'>
                    Nav
                    <span style={{ color: '#39CAD3', fontWeight: '300' }}> Dhamrait</span>
                </p>
                <div className='icons-container'>
                    <a href='https://www.linkedin.com/in/nav-dhamrait-20114ab3' target="_blank"
                        rel="noopener noreferrer">
                        {' '}
                        <LinkedInIcon style={{ color: '#0A66C2' }} />
                    </a>
                    <a
                        href='https://github.com/nav-commits'
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'black' }} 
                    >
                        {' '}
                        <GitHubIcon />
                    </a>
                </div>

                <a href={Resume} download='Example-PDF-document' target="_blank"
                    rel="noopener noreferrer">
                    <Button
                        title={'Download CV'}
                        fontSize={'12px'}
                        backgroundColor='#39CAD3'
                        width='90px'
                        marginTop={'20px'}
                    />
                </a>
            </div>

            <div className='about-section-container'>
                <div className='about-line-container'>
                    <p className='about' style={{ fontSize: '24px' }}>About</p>
                    <ActiveLine width={'67px'} marginTop={'2px'} />
                </div>
                <p className='about-content' style={{ width: '410px' }}>
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
