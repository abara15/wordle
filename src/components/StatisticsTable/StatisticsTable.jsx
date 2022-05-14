import { Stack } from "@mui/material";
import './StatisticsTable.scss';

export default function StatisticsTable() {
    return (
        <>
            <p className="stats-table-title">Statistics</p>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={3} className="stats-table">
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
                    <span className="stats-table-stat">0</span>
                    <span className="stats-table-tag">Played</span>
                </Stack>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
                    <span className="stats-table-stat">0</span>
                    <span className="stats-table-tag">Win %</span>
                </Stack>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
                    <span className="stats-table-stat">0</span>
                    <span className="stats-table-tag">Current Streak</span>
                </Stack>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
                    <span className="stats-table-stat">0</span>
                    <span className="stats-table-tag">Max Streak</span>
                </Stack>
            </Stack>
        </>
    );
}