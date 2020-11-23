import React from 'react'
import Aux from '../../hoc/Aux'
import ToolBar from '../Navigation/Toolbar/Toolbar'
import './Layout.css'

const Layout = ( props ) => (
    <Aux>
        <ToolBar />
        
        <main className="content">
            {props.children}
        </main>
    </Aux>
)

export default Layout