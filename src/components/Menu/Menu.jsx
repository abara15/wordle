import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { BiMenuAltLeft } from 'react-icons/bi';

export default function Menu() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (toggle) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setOpen(toggle);
    };
    
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
                </Box>
            </Drawer>
        </>
    );
}