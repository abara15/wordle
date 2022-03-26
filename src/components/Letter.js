import React, { useContext } from 'react'
import { AppContext } from '../App';

function Letter({ position, attemptVal }) {
    const { board, myWord, currAttempt } = useContext(AppContext);
    const letter = board[attemptVal][position];

    const correct = myWord[position] === letter;
    const almost = !correct && letter !== "" && myWord.includes(letter);

    const letterState = currAttempt.attempt > attemptVal &&
                        (correct ? "correct" : almost ? "almost" : "error");

    return (
        <div className='letter' id={letterState}>{letter}</div>
    );
}

export default Letter;