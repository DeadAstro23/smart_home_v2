import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';


import './Header.less';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends Component {
    state = {
        logged: false,
        open: false
    };

    handleToggle = () => this.setState({
        open: !this.state.open
    });


    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {

        return (
            <div>
                <Drawer open={this.state.open}
                        docked={false}
                        width={200}
                        onRequestChange={this.handleToggle}
                >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                    <MenuItem>Menu Item 4</MenuItem>
                    <MenuItem>Menu Item 5</MenuItem>
                    <MenuItem>Menu Item 6</MenuItem>
                    <MenuItem>Menu Item 7</MenuItem>
                </Drawer>

                <AppBar
                    title="Microsity"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />
            </div>
        );
    }
}

export default Header;