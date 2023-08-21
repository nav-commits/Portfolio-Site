import React from 'react';
import '../Card/Card.css';

export default function Card({ name, image, description, onClick, sourceCode }) {
    return (
        <div onClick={onClick} className='card' id='Projects'>
            <img
                src={image}
                alt='Avatar'
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h2 className='card-header'>{name}</h2>
            <p className='card-text-style'>
                Process of creating and enhancing the user experience of a product or service, with
                the goal of making it useful, usable, and enjoyable for the users. It involves
                considering the entire user journey, from the initial interaction with a product to
                the final goal or task completion.
            </p>
            <p className='card-text-style'>
                Tech-<span style={{ color: '#39cad3' }}>Stack</span> - React Js, HTML, CSS
            </p>
            <p className='card-text-source-code'>
                Source <span style={{ color: '#39cad3' }}>code</span>: {sourceCode}
            </p>
        </div>
    );
}
