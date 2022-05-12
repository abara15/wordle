import { Alert, AlertTitle } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../../App';
import "./GameOver.scss";

function GameOver() {
    const { gameOver, currAttempt, correctWord } = useContext(AppContext);
    return (
        <div className='gameOver'>
            {gameOver.guessedWord
                ?
                <Alert severity="success">
                    <AlertTitle>Congratulations!</AlertTitle>
                    You guessed the word <strong>{correctWord}</strong> in {currAttempt.attempt} attempt(s)
                </Alert>
                :
                <Alert severity="error">
                    <AlertTitle>Uh oh!</AlertTitle>
                    Game Over! The correct word was <strong>{correctWord}</strong>
                </Alert>
            }
        </div>
    );
}

export default GameOver;