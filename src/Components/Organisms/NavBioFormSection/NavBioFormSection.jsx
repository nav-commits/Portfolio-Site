import React from 'react';
import NavBioSection from '../../Molecules/NavBioSection/NavBioSection';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';
import { Button } from '../../Atoms/Button/Button';
import '../NavBioFormSection/NavBioFormSection.css';

export default function NavBioFormSection() {
    return (
        <div className='parent-container'>
            <NavBioSection />
            <div className='form-container'>
                <p className='form-text'>Have questions or want to work together?</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Label name={'Name'} />
                    <Input padding='10px' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Label name={'Email'} />
                    <Input padding='10px' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Label name={'Message'} />
                    <Input padding='40px' />
                </div>
                <Button
                    title='Submit'
                    backgroundColor='#39CAD3'
                    width='55px'
                    marginTop='10px'
                    fontSize={'12px'}
                />
            </div>
        </div>
    );
}
