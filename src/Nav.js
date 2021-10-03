import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Searchbar from './Searchbar';

const toolBarStyle = { "color": "white", "font-size": 16 };

const Nav = () => {
    return (
        <AppBar position="static" >
            <Toolbar variant='regular'>
                <div class="row">
                    <div class="left-side">
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Button style={toolBarStyle}>Menu</Button>
                        <Button style={toolBarStyle}>Settings</Button>
                        <Button style={toolBarStyle}>My Orders</Button>
                    </div>
                    <div class="rigth-side">
                        <Searchbar />
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <IconButton color="inherit" size="large">
                            <AccountCircle />
                        </IconButton>

                    </div>
                </div>
            </Toolbar>
        </AppBar >
    )
}

export default Nav;