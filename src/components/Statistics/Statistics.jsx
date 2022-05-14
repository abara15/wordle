import { forwardRef, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, IconButton, Slide } from "@mui/material";
import { BiBarChartAlt2 } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { GuessDistribution, StatisticsTable } from "..";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// {/* <DialogActions>
//                     <IconButton edge='end' onClick={handleClose}>
//                         <BsX />
//                     </IconButton>
//                 </DialogActions> */}

export default function Statistics() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <IconButton
                onClick={handleClickOpen}
                aria-label="statistics button"
            >
                <BiBarChartAlt2 color="#ffffff" />
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogContent>
                    <StatisticsTable />
                    <GuessDistribution />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" startIcon={<BsShare />}>Share</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};