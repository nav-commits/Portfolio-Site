import React from 'react';
import '../TechSection/TechSection.css';
export default function TechSection() {
    const list = [
        'JavaScript',
        'React JS',
        'React Native',
        'HTML',
        'CSS',
        'TypeScript',
        'Node JS',
        'Express Js',
        'MongoDB',
        'SQL',
    ];
    return (
        <div id='Technologies' className='tech-section-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='tech-content-container'>
                    <p className='tech-title'>Technologies </p>
                    <div className='active' style={{ width: '145px', marginTop: '5px' }} />
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '50px',
                    marginTop: '100px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {list.map((item) => {
                        return (
                            <ul
                                style={{
                                    padding: '5px',
                                    paddingLeft: '10px',
                                    borderLeft: '3px solid #39cad3',
                                }}
                            >
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontSize: '15px',
                                    }}
                                    href='/'
                                >
                                    {item}
                                </a>
                            </ul>
                        );
                    })}
                </div>
                <div
                    style={{
                        height: '300px',
                        width: '420px',
                        backgroundColor: 'black',
                        position: 'relative',
                        left: '110px',
                    }}
                >
                    <p>Hello world</p>
                </div>
            </div>
        </div>
    );
}
