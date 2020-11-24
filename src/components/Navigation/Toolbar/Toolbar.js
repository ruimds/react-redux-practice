import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="toolbar">
        <DrawerToggle clicked={props.menu}/>
        <Logo /> 
        <nav className="desktop-only">
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar