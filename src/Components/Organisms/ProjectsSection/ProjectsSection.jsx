import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2>Projects</h2>
                <div className='active' style={{ width: '90px', marginTop: '5px' }} />
            </div>
        </div>
    );
};

export default ProjectsSection;
