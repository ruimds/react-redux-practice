import React from 'react'
import Aux from '../../hoc/Aux'

const Layout = ( props ) => (
    <Aux>
        <div className="toolbar-container">
            Toolbar
            SideDrawer
            Backdrop
        </div>
        <main className="main-container">
            {props.children}
        </main>
    </Aux>
)

export default Layout