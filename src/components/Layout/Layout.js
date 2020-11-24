import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import ToolBar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import './Layout.css'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            };
        });
    }

    render () {
        return (
            <Aux>
                <ToolBar menu={this.sideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler} />
                <main className="content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout