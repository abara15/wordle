import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { useState } from "react";
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaDev, FaGithub, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa';

export default function Menu() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (toggle) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setOpen(toggle);
    };

    // Change color to #ffffff when you put content in menu
    // #e1e1e1
    
    return (
        <>
            <IconButton
                onClick={toggleDrawer(true)}
                aria-label="statistics button"
            >
                <BiMenuAltLeft color="#ffffff" />
            </IconButton>
            <Drawer
                anchor='left'
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250, backgroundColor: '#111111' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List
                        component='nav'
                        aria-labelledby="menu-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="menu-list-subheader">Social Media Links</ListSubheader>
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <FaUser />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaGithub />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaDev />
                            </ListItemIcon>
                            <ListItemText primary="Dev" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaLinkedin />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaTwitter />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}