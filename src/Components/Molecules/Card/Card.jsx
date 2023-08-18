import React from 'react';
import '../Card/Card.css';

export default function Card({ name, image, description }) {
    return (
        <div class='card' id='Projects'>
            <img
                src={image}
                alt='Avatar'
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3 className='card-header'>{name}</h3>
            <p className='card-text-style'>
                Process of creating and enhancing the user experience of a product or service, with
                the goal of making it useful, usable, and enjoyable for the users. It involves
                considering the entire user journey, from the initial interaction with a product to
                the final goal or task completion.
            </p>
            <p className='card-text-style'>Tech-Stack - React Js, HTML, CSS</p>
            <p className='card-text-style'>Source Code- Github</p>
            <p className='card-text-style'>view site-link</p>
        </div>
    );
}
