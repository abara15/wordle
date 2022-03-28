import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { IoMdInformationCircleOutline, IoMdMenu, IoMdRefresh, IoIosStats } from "react-icons/io";
import "./Navbar.scss";

function Navbar() {    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar className='app__navbar'>
                    <div>
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
                    <Typography>Wordle</Typography>
                    <div>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="statistics"
                        >
                            <IoIosStats />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                        >
                            <IoMdMenu />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;