import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={`side-drawer ${props.open ? 'open' : 'close'}`}>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer