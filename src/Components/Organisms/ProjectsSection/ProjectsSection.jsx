import React from 'react';
import './ProjectsSection.css';
import Card from '../../Molecules/Card/Card';
import ActiveLine from '../../Atoms/ActiveLine/ActiveLine';

const ProjectsSection = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    return (
        <React.Fragment>
            <div className='project-section-container'>
                <div className='header-title'>
                    <h2>Projects</h2>
                    <ActiveLine width={'90px'} marginTop={'5px'} />
                </div>
            </div>

            <div className='cards-container'>
                <Card
                    name={'EqBank'}
                    image={
                        'https://www.eqbank.ca/images/default-source/default-album/og-image-logo.tmb-opengraph.jpg?Culture=en&sfvrsn=60d787d3_5'
                    }
                    description=''
                    onClick={() => openInNewTab('https://eqbanksite.netlify.app')}
                    sourceCode={'https://github.com/nav-commits/eqbanksite'}
                />
                <Card
                    name={'Fido'}
                    image={'https://www.fido.ca/app/prod/assets/i/og-image.png'}
                    description=''
                    onClick={() => openInNewTab('https://fidosite.netlify.app')}
                    sourceCode={'https://github.com/nav-commits/Fido'}
                />
                <Card
                    name={'AfterPay'}
                    image={'https://logowik.com/content/uploads/images/afterpay-new-20215837.jpg'}
                    description=''
                    onClick={() => openInNewTab('https://afterpaysite.netlify.app')}
                    sourceCode={'https://github.com/nav-commits/AfterPay'}
                />
            </div>
        </React.Fragment>
    );
};

export default ProjectsSection;
