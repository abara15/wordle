import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';

function Letter({ position, attemptVal }) {
    const { board, myWord, currAttempt, setDisabledLetters, setAlmostLetters, setCorrectLetters } = useContext(AppContext);
    const letter = board[attemptVal][position];

    const correct = myWord[position] === letter;
    const almost = !correct && letter !== "" && myWord.includes(letter);

    const letterState = currAttempt.attempt > attemptVal &&
                        (correct ? "correct" : almost ? "almost" : "error");
    
    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter]);
        } else if (letter !== "" && !correct && almost) {
            setAlmostLetters((prev) => [...prev, letter]);
        } else if (letter !== "" && correct && !almost) {
            setCorrectLetters((prev) => [...prev, letter]);
        }
    }, [currAttempt.attempt]);

    return (
        <div className='letter' id={letterState}>{letter}</div>
    );
}

export default Letter;