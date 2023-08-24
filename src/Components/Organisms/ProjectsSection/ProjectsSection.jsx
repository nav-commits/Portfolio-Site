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
                    description='EQ Bank is a Canadian online bank known for its high-interest savings accounts and user-friendly digital banking experience. It offers competitive interest rates, no monthly fees, and a mobile app for convenient access to banking services.'
                    onClick={() => openInNewTab('https://eqbanksite.netlify.app')}
                    githubLink={'https://github.com/nav-commits/eqbanksite'}
                    websiteLink={'https://eqbanksite.netlify.app'}
                />
                <Card
                    name={'Fido'}
                    image={'https://www.fido.ca/app/prod/assets/i/og-image.png'}
                    description="Fido is a Canadian telecommunications company that provides mobile phone, internet, and home phone services. It's known for its affordable plans, data offerings, and flexible contract options. Fido is recognized for its customer-friendly approach and has been a popular choice among consumers seeking budget-conscious mobile and internet solutions in Canada. Keep in mind that my information is based on the status of Fido up until September 2021, and there might have been changes or developments since then."
                    onClick={() => openInNewTab('https://fidosite.netlify.app')}
                    githubLink={'https://github.com/nav-commits/Fido'}
                    websiteLink={'https://fidosite.netlify.app'}
                />
                
                <Card
                    name={'AfterPay'}
                    image={'https://logowik.com/content/uploads/images/afterpay-new-20215837.jpg'}
                    description="Afterpay is a buy-now-pay-later service that allows consumers to make purchases and pay for them in installments over time, without the need for traditional credit checks. It's popular among online shoppers for its simplicity and flexibility, enabling them to split payments into manageable chunks. Afterpay is typically integrated with online retailers, and users can choose Afterpay as a payment option during checkout. Please note that my information is accurate as of September 2021, and there may have been developments or changes since then."
                    onClick={() => openInNewTab('https://afterpaysite.netlify.app')}
                    githubLink={'https://github.com/nav-commits/AfterPay'}
                    websiteLink={'https://afterpaysite.netlify.app'}
                />
            </div>
        </React.Fragment>
    );
};

export default ProjectsSection;
