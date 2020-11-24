import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className="toolbar">
        <Logo /> 
        <nav className="desktop-only">
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar