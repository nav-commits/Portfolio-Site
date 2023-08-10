import React from 'react'
import Logo from '../../Atoms/Logo/Logo'
import Name from '../../Atoms/Name/Name'

export default function NameAndLogo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
            <Logo />
            <Name title='Nav Dhamrait' />
        </div>
    )
}
