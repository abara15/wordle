import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { useState } from "react";
import { BiCog } from 'react-icons/bi';
import { IoContrastOutline } from 'react-icons/io5';

export default function Settings() {

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const toggleDrawer = (toggle) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setOpen(toggle);
    };

    const handleToggle = () => {
        setChecked(!checked);
    };

    return (
        <>
            <IconButton
                onClick={toggleDrawer(true)}
                aria-label="settings button"
            >
                <BiCog color="#ffffff" />
            </IconButton>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <IoContrastOutline />
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-contrast" primary="High Contrast Mode" />
                            <Switch
                                edge='end'
                                onChange={handleToggle}
                                checked={checked}
                                disabled
                                inputProps={{
                                    'aria-labelledby': 'switch-list-label-contrast',
                                }}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}