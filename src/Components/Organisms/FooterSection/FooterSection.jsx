import React from 'react';
import './FooterSection.css';
import { Button } from '../../Atoms/Button/Button';

export default function FooterSection() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div id='Contact' style={{ backgroundColor: '#0F272F', marginTop: '50px', padding: '30px' }}>
            <div className='parent-footer-container'>
                <div className='content-container-footer'>
                    <h2 style={{ color: '#39cad3' }}>Nav Dhamrait</h2>
                    <h3>full-Stack Developer</h3>
                </div>

                <div className='content-container-footer'>
                    <h2 style={{ color: '#39cad3' }}>Contact</h2>
                    <p>647 975 3467</p>
                    <p>navdeep.dhamrait94@gmail.com</p>
                    <p>Toronto,Ontario</p>
                </div>

                <div className='content-container-footer'>
                    <button>Press Up</button>
                    <Button
                        title='Lets get Started!'
                        backgroundColor='#39CAD3'
                        width='125px'
                        marginTop='10px'
                        fontSize={'12px'}
                        onClick={scrollToTop}
                    />
                </div>
            </div>
        </div>
    );
}
