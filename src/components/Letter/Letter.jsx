import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/Store';
import './Letter.scss';

function Letter({ position, attemptVal }) {
    const [state, setState] = useContext(Context);
    const letter = state.board[attemptVal][position];
    const correct = state.correctWord.toUpperCase()[position] === letter;
    const almost = !correct && letter !== "" && state.correctWord.toUpperCase().includes(letter);
    const letterState = state.currAttempt.attempt > attemptVal &&
                        (correct ? "correct" : almost ? "almost" : "error");
    
    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setState(prevState => ({
                ...prevState,
                disabledLetters: [...prevState.disabledLetters, letter]
            }));
        } else if (letter !== "" && correct) {
            if (state.almostLetters.includes(letter)) {
                let arr = state.almostLetters.filter(x => x !== letter);
                setState(prevState => ({
                    ...prevState,
                    almostLetters: arr
                }));
            }
            setState(prevState => ({
                ...prevState,
                correctLetters: [...prevState.correctLetters, letter]
            }));
        } else if (letter !== "" && almost) {
            if (!state.correctLetters.includes(letter)) {
                setState(prevState => ({
                    ...prevState,
                    almostLetters: [...prevState.almostLetters, letter]
                }));
            }
        }
    }, [state.currAttempt.attempt]);

    return (
        <div className='letter' id={letterState}>{letter}</div>
    );
}

export default Letter;