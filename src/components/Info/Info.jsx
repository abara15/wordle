import { AppBar, Dialog, DialogContent, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { useState, forwardRef } from 'react';
import { BsQuestionCircle, BsX } from 'react-icons/bs';
import './Info.scss';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Info() {

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
                <BsQuestionCircle color="#ffffff" />
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h6' component='div'>How to play</Typography>
                        <IconButton
                            onClick={handleClose}
                            aria-label='close'
                            sx={{ position: 'absolute', right: 10 }}
                        >
                            <BsX color='#ffffff' fontSize={35} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Typography>Guess the <strong>WORDLE</strong> in six tries.</Typography>
                    <Typography>Each guess must be a valid five-letter word. Hit the enter button to submit.</Typography>
                    <Typography>After each guess, the color of the tiles will change to show how close your guess was to the word.</Typography>
                    <hr />
                    <hr />
                    <Typography>
                        <strong>A new WORDLE will be available on each turn!</strong>
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}