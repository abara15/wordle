import React, { useContext } from 'react'
import { AppContext } from '../App';

function Letter({ position, attemptVal }) {
    const { board } = useContext(AppContext);

    const letter = board[attemptVal][position];
    
    return (
        <div className='letter'>{letter}</div>
    );
}

export default Letter;