import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';

function Letter({ position, attemptVal }) {
    const {
        board,
        currAttempt,
        setDisabledLetters,
        setAlmostLetters,
        almostLetters,
        setCorrectLetters,
        correctLetters,
        correctWord
    } = useContext(AppContext);

    const letter = board[attemptVal][position];
    console.log(`The correct word is ${correctWord}`);
    const correct = correctWord.toUpperCase()[position] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const letterState = currAttempt.attempt > attemptVal &&
                        (correct ? "correct" : almost ? "almost" : "error");
    
    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter]);
        } else if (letter !== "" && correct) {
            if (almostLetters.includes(letter)) {
                let arr = almostLetters.filter(x => x !== letter);
                setAlmostLetters(arr);
            }
            setCorrectLetters((prev) => [...prev, letter]);
        } else if (letter !== "" && almost) {
            if (!correctLetters.includes(letter)) {
                setAlmostLetters((prev) => [...prev, letter]);
            }
        }
    }, [currAttempt.attempt]);

    return (
        <div className='letter' id={letterState}>{letter}</div>
    );
}

export default Letter;