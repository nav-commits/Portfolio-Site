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

    const scrollToTopTwo = () => {
        window.scrollTo({
            top: 0 ,
            behavior: 'smooth',
        });
    };
    return (
        <div
            id='Contact'
            style={{ backgroundColor: '#0F272F', marginTop: '50px', padding: '30px' }}
        >
            <div className='parent-footer-container'>
                <div className='content-container-footer'>
                    <h2 style={{ color: '#39cad3' }}>Nav Dhamrait</h2>
                    <h3>Full-Stack Developer</h3>
                </div>

                <div className='content-container-footer'>
                    <h2 style={{ color: '#39cad3' }}>Contact</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#39cad3' }}>
                            <LocalPhoneIcon />
                        </span>{' '}
                        <p> 647-975-3467</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#39cad3' }}>
                            <EmailIcon />
                        </span>{' '}
                        <p> navdeep.dhamrait94@gmail.com</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ color: '#39cad3' }}>
                            <LocationOnIcon />
                        </span>{' '}
                        <p> Toronto, Ontario</p>
                    </div>
                </div>

                <div className='content-container-footer'>
                    <Button
                        icon={<ArrowUpwardOutlinedIcon />}
                        backgroundColor='#39CAD3'
                        width='50px'
                        marginTop='10px'
                        fontSize={'12px'}
                        onClick={scrollToTop}
                    />
                    <Button
                        title='Lets get Started!'
                        backgroundColor='#39CAD3'
                        width='125px'
                        marginTop='10px'
                        fontSize={'12px'}
                        onClick={scrollToTopTwo}
                    />
                </div>
            </div>
        </div>
    );
}
