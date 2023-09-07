import React, { useEffect } from 'react';
import NavBioSection from '../../Molecules/NavBioSection/NavBioSection';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import { Button } from '../../Atoms/Button/Button';
import '../NavBioFormSection/NavBioFormSection.css';
import emailjs from '@emailjs/browser';
import TextArea from '../../Atoms/TextArea/TextArea';

export default function NavBioFormSection() {
    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Message, setMessage] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);

    const checkInputVal = () => {
        if (Name.length > 0 && Email.length > 0 && Message.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

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
                    setName('')
                    setMessage('')
                    setEmail('')
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    useEffect(() => {
        checkInputVal()
    },);

    return (
        <div className='parent-container' id='Home'>
            <NavBioSection />
            <div className='form-container'>
                <p className='form-text'>Have questions or want to work together?</p>
                <form onSubmit={sendEmail}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Label name={'Name'} value={Name} />
                        <Input
                            padding='10px'
                            name={'Name'}
                            onChange={(e) => setName(e.target.value)}
                            value={Name}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Label name={'Email'} />
                        <Input
                            padding='10px'
                            name={'Email'}
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Label name={'Message'} />
                        <TextArea
                            height='180px'
                            name={'Message'}
                            value={Message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <Button
                        title='Submit'
                        backgroundColor='#39CAD3'
                        width='55px'
                        marginTop='10px'
                        fontSize={'12px'}
                        disabled={disabled}
                    />
                </form>
            </div>
        </div>
    );
}
