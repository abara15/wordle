import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { IoMdInformationCircleOutline, IoMdRefresh } from "react-icons/io";
import { IoCog } from "react-icons/io5";

import { StatisticsDialog } from "..";
import "./Navbar.scss";

function Navbar() {    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky' elevation={0}>
                <Toolbar className='app__navbar'>
                    <div className='app__navbar-icons'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="refresh"
                            onClick={() => window.location.reload(false)}
                        >
                            <IoMdRefresh />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="info"
                        >
                            <IoMdInformationCircleOutline />
                        </IconButton>
                    </div>
                    <Typography className='app__navbar-title'>Wordle</Typography>
                    <div className='app__navbar-icons'>
                        <StatisticsDialog />
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="settings"
                        >
                            <IoCog />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;