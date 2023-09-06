import React from 'react';
import './FooterSection.css';
import { Button } from '../../Atoms/Button/Button';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function FooterSection() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    function renderContactInfo(text, icon) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: '#39cad3' }}>{icon}</span>
                <p>{text}</p>
            </div>
        );
    }

    function renderButton(iconOrTitle, width, onClick) {
        return (
            <Button
                icon={typeof iconOrTitle === 'string' ? undefined : iconOrTitle}
                title={typeof iconOrTitle === 'string' ? iconOrTitle : undefined}
                backgroundColor='#39CAD3'
                width={width}
                marginTop='10px'
                fontSize={'12px'}
                onClick={onClick}
            />
        );
    }

    return (
        <div id='Contact' className='footer-section'>
            <div className='parent-footer-container'>
                <div className='content-container-footer'>
                    <h2 className='profile-user-name' style={{ color: '#39cad3' }}>
                        Nav Dhamrait
                    </h2>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className='content-container-footer'>
                    <div className='sub-container-footer'>
                        <h2 style={{ color: '#39cad3' }}>Contact</h2>
                        {renderContactInfo('647-975-3467', <LocalPhoneIcon />)}
                        {renderContactInfo('navdeep.dhamrait94@gmail.com', <EmailIcon />)}
                        {renderContactInfo('Toronto, Ontario', <LocationOnIcon />)}
                    </div>
                </div>
                <div className='content-container-footer'>
                    {renderButton(<ArrowUpwardOutlinedIcon />, '50px', scrollToTop)}
                    {renderButton('Let\'s get Started!', '125px', scrollToTop)}
                </div>
            </div>
        </div>
    );
}

