import React, { forwardRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, Stack, Typography } from '@mui/material';
import { IoIosStats } from "react-icons/io";
import { IoClose, IoShareSocial } from "react-icons/io5";
import "./StatisticsDialog.scss"

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function StatisticsDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                size="large"
                color="inherit"
                aria-label="statistics"
                onClick={handleClickOpen}
            >
                <IoIosStats />
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="Opens statistics dialog modal."
            >
                <DialogTitle className='app__statistics_header'>
                    <div style={{ width: '56px', height: '56px'}}></div>
                    <Typography className='app__statistics_title'>Statistics</Typography>
                    <DialogActions>
                        <IconButton onClick={handleClose}>
                            <IoClose />
                        </IconButton>
                    </DialogActions>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <p className='app__statistics_stat'>0</p>
                                <p className='app__statistics_tag'>Played</p>
                            </Stack>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <p className='app__statistics_stat'>0</p>
                                <p className='app__statistics_tag'>Win %</p>
                            </Stack>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <p className='app__statistics_stat'>0</p>
                                <p className='app__statistics_tag'>Streak</p>
                            </Stack>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        startIcon={<IoShareSocial />}
                    >
                        Share
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default StatisticsDialog;