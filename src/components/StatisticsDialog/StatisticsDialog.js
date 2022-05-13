import React, { forwardRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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
                    <TableContainer>
                        <Table aria-label="statistics-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        <strong>0</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong>0</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong>0</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong>0</strong>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">Played</TableCell>
                                    <TableCell align="center">Win %</TableCell>
                                    <TableCell align="center">Current Streak</TableCell>
                                    <TableCell align="center">Max Streak</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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