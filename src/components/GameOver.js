import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
    const { gameOver, currAttempt, correctWord } = useContext(AppContext);
    return (
        <div className='gameOver'>
            <h3>
                {gameOver.guessedWord 
                    ?
                    `You correctly guessed the word ${correctWord}!`
                    :
                    `Game Over! The correct word was ${correctWord}`
                }
            </h3>
            {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempt(s)</h3>)}
        </div>
    );
}

export default GameOver;