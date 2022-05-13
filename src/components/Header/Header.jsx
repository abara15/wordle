import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { BiBarChartAlt2, BiCog, BiMenuAltLeft } from 'react-icons/bi';
import Info from "../Info/Info";
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
                    <IconButton aria-label="statistics button">
                        <BiMenuAltLeft color="#ffffff" />
                    </IconButton>
                    <Info />
                </Stack>
            </Grid>
            <Grid item>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                >
                    <Typography className="header-title">Wordle</Typography>
                    <Typography className="header-tag">@abara15</Typography>
                </Stack>
            </Grid>
            <Grid item>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                >
                    <IconButton aria-label="statistics button">
                        <BiBarChartAlt2 color="#ffffff" />
                    </IconButton>
                    <IconButton aria-label="settings button">
                        <BiCog color="#ffffff" />
                    </IconButton>
                </Stack>
            </Grid>
        </Grid>
    );
}

// IoSettingsOutline