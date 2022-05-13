import { IconButton } from "@mui/material";
import { BiCog } from 'react-icons/bi';

export default function Settings() {
    return (
        <>
            <IconButton aria-label="settings button">
                <BiCog color="#ffffff" />
            </IconButton>
        </>
    );
}