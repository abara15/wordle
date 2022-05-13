import { Stack } from '@mui/material';
import { useContext } from 'react';
import { Board, Header, Keyboard } from '..';
import { Context } from '../../context/Store';
import './Container.scss';

export default function Container() {

    const [state, setState] = useContext(Context);

    const onSelectLetter = (keyVal) => {
        const newBoard = [...state.board];
        if (state.currAttempt.letterPos > 4) return;
        newBoard[state.currAttempt.attempt][state.currAttempt.letterPos] = keyVal;
        setState(prevState => ({
            ...prevState,
            board: newBoard,
            currAttempt: {
                attempt: prevState.currAttempt.attempt,
                letterPos: prevState.currAttempt.letterPos + 1
            }
        }));
    };

    const onDelete = () => {
        const newBoard = [...state.board];
        if (state.currAttempt.letterPos === 0) return;
        newBoard[state.currAttempt.attempt][state.currAttempt.letterPos - 1] = "";
        setState(prevState => ({
            ...prevState,
            board: newBoard,
            currAttempt: {
                attempt: prevState.currAttempt.attempt,
                letterPos: prevState.currAttempt.letterPos - 1
            }
        }));
    };

    const onEnter = () => {
        console.log(state.correctWord);
        if (state.currAttempt.letterPos !== 5) return;

        let currWord = "";
        for (let i = 0; i < 5; i++) {
            currWord += state.board[state.currAttempt.attempt][i];
        }

        if (state.wordSet.has(currWord.toLowerCase()) || state.guessSet.has(currWord.toLowerCase())) {
            setState(prevState => ({
                ...prevState,
                currAttempt: {
                    attempt: prevState.currAttempt.attempt + 1,
                    letterPos: 0
                }
            }));
        } else {
            alert("Word not found");
        }

        if (currWord === state.correctWord.toUpperCase()) {
            setState(prevState => ({
                ...prevState,
                gameOver: {
                    gameOver: true,
                    guessedWord: true
                }
            }));
            return;
        }

        if (state.currAttempt.attempt === 5) {
            setState(prevState => ({
                ...prevState,
                gameOver: {
                    gameOver: true,
                    guessedWord: false
                }
            }));
        }
    };

    return (
        <div className='app-container'>
            <Header />
            <div className='game'>
                <Board />
                <br />
                <Keyboard onSelectLetter={onSelectLetter} onDelete={onDelete} onEnter={onEnter} />
            </div>
        </div>
    );
}