import React from 'react';
import '../Card/Card.css';

export default function Card({
    name,
    image,
    description,
    onClick,
    githubLink,
    websiteLink,
    githubIcon,
}) {
    return (
        <div className='card' id='Projects'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src={image}
                    alt='Avatar'
                    style={{ width: '270px', height: '250px' }}
                />
            </div>
            <h2 className='card-header'>{name}</h2>
            <p className='card-text-style'>{description}</p>
            <p className='card-text-style'>
                Tech <span style={{ color: '#39cad3' }}>Stack</span> : React JS, HTML, CSS and JSON
                data.
            </p>
            <p className='card-text-source-code'>
                Source Code : &nbsp;
                <a
                    style={{
                        color: '#39cad3',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        position: 'relative',
                        top: '5px',
                    }}
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {githubIcon}
                </a>
            </p>
            <p className='card-text-website-link' onClick={onClick}>
                Website URL :
                <span style={{ color: '#39cad3', textDecoration: 'none', cursor: 'pointer' }}>
                    {websiteLink}
                </span>
            </p>
        </div>
    );
}
