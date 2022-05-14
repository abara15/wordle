import PropTypes from 'prop-types';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import './GuessDistribution.scss';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export default function GuessDistribution() {
    return (
        <>
            <p className="gd-title">Guess Distribution</p>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={0}>
                <Grid container spacing={2} alignItems='center' justifyItems='center'>
                    <Grid item xs={1}>
                        <Typography>1</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <BorderLinearProgress variant="determinate" value={30} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems='center' justifyItems='center'>
                    <Grid item xs={1}>
                        <Typography>2</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <BorderLinearProgress variant="determinate" value={40} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems='center' justifyItems='center'>
                    <Grid item xs={1}>
                        <Typography>3</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems='center' justifyItems='center'>
                    <Grid item xs={1}>
                        <Typography>4</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems='center' justifyItems='center'>
                    <Grid item xs={1}>
                        <Typography>5</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <BorderLinearProgress variant="determinate" value={70} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems='center' justifyItems='center'>
                    <Grid item xs={1}>
                        <Typography>6</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <BorderLinearProgress variant="determinate" value={80} />
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}