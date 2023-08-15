import React from 'react';
import NavBioSection from '../../Molecules/NavBioSection/NavBioSection';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import { Button } from '../../Atoms/Button/Button';
import '../NavBioFormSection/NavBioFormSection.css';
import emailjs from '@emailjs/browser';

export default function NavBioFormSection() {
    // const [disabled, setDisabled] = React.useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8by364q', 'template_sa5iohc', e.target, 's6-WhquotJCvaecXM').then(
            (result) => {
                console.log(result.text);
                console.log(result)
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
                        <Input padding='40px' name={'Message'} />
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
