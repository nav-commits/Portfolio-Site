import React, { useState } from 'react';
import '../TechSection/TechSection.css';
import { techLabels } from '../../../Utils/TechNames';
import { initialImages } from '../../../Utils/TechNames';
import ActiveLine from '../../Atoms/ActiveLine/ActiveLine';

export default function TechSection() {
    const [activeLabel, setActiveLabel] = useState('JavaScript');
    const [images, setImages] = useState(initialImages);

    const handleLabelClick = (menuTitle) => {
        const filteredImages = initialImages.filter((image) => image.label === menuTitle);
        setImages(filteredImages);
        setActiveLabel(menuTitle);
    };

    return (
        <div id='Technologies' className='tech-section-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='tech-content-container'>
                    <p className='tech-title'>Technologies </p>
                    <ActiveLine width={'145px'} marginTop={'2px'} />
                </div>
            </div>

            <div className='content-container '>
                <div className='child-container'>
                    {techLabels.map((item) => (
                        <ul
                            key={item}
                            style={{
                                borderLeft: '3px solid #39cad3',
                            }}
                        >
                            <li
                                className='tech-labels'
                                onClick={() => handleLabelClick(item)}
                                style={{
                                    textDecoration: 'none',
                                    color: activeLabel === item ? 'black' : 'white',
                                    backgroundColor: activeLabel === item ? '#39cad3' : null,
                                }}
                            >
                                {item.toUpperCase()}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className='tech-image-container'>
                    {images.map(
                        (image, index) =>
                            image.label === activeLabel && (
                                <img
                                    style={{ height: '205px', marginTop: '60px' }}
                                    key={index}
                                    src={image.src}
                                    alt={image.label}
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
