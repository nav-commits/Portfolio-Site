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
                    description="EQ Bank, a prominent Canadian online financial institution, has earned recognition for its exceptional high-yield savings accounts and an intuitively designed digital banking interface. As part of a personal project, I embarked on the endeavor of crafting a meticulously engineered replica of EQ Bank from the ground up. Leveraging my expertise in web development, I harnessed React.js, CSS, and HTML to construct a sophisticated emulation of EQ Bank's digital platform. Moreover, I meticulously curated and managed the data using JSON, ensuring a seamless user experience. The culmination of this project involved the creation of pivotal website components, including an aesthetically polished homepage and an intricate account registration process, all designed to closely mirror the original EQ Bank experience"
                    onClick={() => openInNewTab('https://eqbanksite.netlify.app')}
                    githubLink={'https://github.com/nav-commits/eqbanksite'}
                    websiteLink={'https://eqbanksite.netlify.app'}
                />
                <Card
                    name={'Fido'}
                    image={'https://www.fido.ca/app/prod/assets/i/og-image.png'}
                    description="Fido, a prominent Canadian telecommunications powerhouse, is renowned for its wide array of mobile phone, internet, and home phone services, all tailored to meet the diverse needs of its customers. With a reputation for delivering cost-effective plans, generous data offerings, and adaptable contract choices, Fido has left an indelible mark in the industry.

Driven by a passion for web development, I embarked on a personal project to emulate the Fido website. Employing a combination of React.js, HTML, CSS, and meticulously curated JSON data, I painstakingly recreated various components and pages of the Fido website. This endeavor allowed me to hone my web development skills while replicating the essence of Fido's online presence."
                    onClick={() => openInNewTab('https://fidosite.netlify.app')}
                    githubLink={'https://github.com/nav-commits/Fido'}
                    websiteLink={'https://fidosite.netlify.app'}
                />

                <Card
                    name={'AfterPay'}
                    image={'https://logowik.com/content/uploads/images/afterpay-new-20215837.jpg'}
                    description="
I undertook a challenging personal project: the creation of a clone of Afterpay's renowned buy-now-pay-later service. Afterpay has revolutionized the way consumers shop by enabling them to make purchases and conveniently spread their payments over time, all without the constraints of conventional credit checks.

Harnessing my skills in React.js, HTML, CSS, and a meticulously curated JSON dataset, I meticulously crafted various aspects of this innovative payment platform. This endeavor allowed me to delve into web development intricacies while faithfully recreating key features and functionalities of Afterpay's website."
                    onClick={() => openInNewTab('https://afterpaysite.netlify.app')}
                    githubLink={'https://github.com/nav-commits/AfterPay'}
                    websiteLink={'https://afterpaysite.netlify.app'}
                />
            </div>
        </React.Fragment>
    );
};

export default ProjectsSection;
