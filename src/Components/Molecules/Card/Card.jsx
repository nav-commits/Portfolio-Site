import React from 'react';
import '../Card/Card.css';

export default function Card({ name, image, description, onClick, githubLink, websiteLink }) {
    return (
        <div className='card' id='Projects'>
            <img
                src={image}
                alt='Avatar'
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h2 className='card-header'>{name}</h2>
            <p className='card-text-style'>{description}</p>
            <p className='card-text-style'>
                Tech <span style={{ color: '#39cad3' }}>Stack</span> : React JS, HTML, CSS and JSON
                data.
            </p>
            <p className='card-text-source-code'>
                Source <span style={{ color: '#39cad3' }}>Code</span> :{' '}
                <a
                    style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {githubLink}
                </a>
            </p>
            <p className='card-text-website-link' onClick={onClick}>
                Website <span style={{ color: '#39cad3' }}>URL</span> :{' '}
                <span style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}>
                    {websiteLink}
                </span>
            </p>
        </div>
    );
}
