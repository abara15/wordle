import { Grid, Stack } from "@mui/material";
import { Info, Menu, Settings, Statistics } from "..";
import './Header.scss';

export default function Header() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ padding: 3}}
        >
            <Grid item>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                >
                    <Menu />
                    <Info />
                </Stack>
            </Grid>
            <Grid item>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                >
                    <span className="header-title">Wordle</span>
                </Stack>
            </Grid>
            <Grid item>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                >
                    <Statistics />
                    <Settings />
                </Stack>
            </Grid>
        </Grid>
    );
}

// IoSettingsOutline