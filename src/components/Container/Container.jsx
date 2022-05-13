import { Stack } from '@mui/material';
import { Board, Header} from '..';
import './Container.scss';

export default function Container() {
    return (
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            className='app-container'
        >
            <Header />
            <Board />
            <div>Test</div>
        </Stack>
    );
}