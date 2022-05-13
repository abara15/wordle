import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { BiCog } from 'react-icons/bi';

export default function Settings() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (toggle) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setOpen(toggle);
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
                    sx={{ width: 250, backgroundColor: '#111111' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                </Box>
            </Drawer>
        </>
    );
}