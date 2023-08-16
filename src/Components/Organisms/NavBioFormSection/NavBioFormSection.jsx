import React from 'react';
import NavBioSection from '../../Molecules/NavBioSection/NavBioSection';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import { Button } from '../../Atoms/Button/Button';
import '../NavBioFormSection/NavBioFormSection.css';
import emailjs from '@emailjs/browser';
import TextArea from '../../Atoms/TextArea/TextArea';

export default function NavBioFormSection() {

    const { REACT_APP_SERVERID, REACT_APP_TEMPLATEID, REACT_APP_PULICKEY } = process.env;
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                `${REACT_APP_SERVERID}`,
                `${REACT_APP_TEMPLATEID}`,
                e.target,
                `${REACT_APP_PULICKEY}`
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log(result);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        // setDisabled(false)
        e.target.reset();
    };
    return (
        <div className='parent-container' id='Home'>
            <NavBioSection />
            <div className='form-container'>
                <p className='form-text'>Have questions or want to work together?</p>
                <form onSubmit={sendEmail}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Label name={'Name'} />
                        <Input padding='10px' name={'Name'} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Label name={'Email'} />
                        <Input padding='10px' name={'Email'} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Label name={'Message'} />
                        <TextArea height='180px' name={'Message'} />
                    </div>

                    <Button
                        title='Submit'
                        backgroundColor='#39CAD3'
                        width='55px'
                        marginTop='10px'
                        fontSize={'12px'}
                        // disabled={disabled}
                    />
                </form>
            </div>
        </div>
    );
}
