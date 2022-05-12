import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Board, Keyboard, GameOver, Navbar } from './components';
import { boardDefault, generateGuessSet, generateWordSet } from './constants/Words';

export const AppContext = createContext();

export default function App() {
	// Initialize the board with its default state
    const [board, setBoard] = useState(boardDefault);
	const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
	const [wordSet, setWordSet] = useState(new Set());
	const [guessSet, setGuessSet] = useState(new Set());
	const [disabledLetters, setDisabledLetters] = useState([]);
	const [almostLetters, setAlmostLetters] = useState([]);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [gameOver, setGameOver] = useState({
		gameOver: false,
		guessedWord: false
	});
	const [correctWord, setCorrectWord] = useState("");

	useEffect(() => {
		generateWordSet().then((words) => {
			setCorrectWord(words.gameWord);
			setWordSet(words.wordSet);
		});
		generateGuessSet().then((guesses) => {
			setGuessSet(guesses.guessSet);
		});
	}, [])

	const onSelectLetter = (keyVal) => {
		const newBoard = [...board];
		if (currAttempt.letterPos > 4) return;
		newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
		setBoard(newBoard);
		setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
	};

	const onDelete = () => {
		const newBoard = [...board];
		if (currAttempt.letterPos === 0) return;
		newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
		setBoard(newBoard);
		setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
	};
	
	const onEnter = () => {
		console.log(correctWord);
		if (currAttempt.letterPos !== 5) return;

		let currWord = "";
		for (let i = 0; i < 5; i++) {
			currWord += board[currAttempt.attempt][i];
		}

		if (wordSet.has(currWord.toLowerCase()) || guessSet.has(currWord.toLowerCase())) {
			setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
		} else {
			alert("Word not found");
		}

		if (currWord === correctWord.toUpperCase()) {
			setGameOver({gameOver: true, guessedWord: true});
			return;
		}

		if (currAttempt.attempt === 5) {
			setGameOver({gameOver: true, guessedWord: false});
		}
	};

	return (
		<div className="App">
			<Navbar />
			<AppContext.Provider 
				value={{
					board,
					setBoard,
					currAttempt,
					setCurrAttempt,
					onSelectLetter,
					onDelete,
					onEnter,
					disabledLetters,
					setDisabledLetters,
					almostLetters,
					setAlmostLetters,
					correctLetters,
					setCorrectLetters,
					gameOver,
					setGameOver,
					correctWord
				}}
			>
				<div className='game'>
					{gameOver.gameOver ? <GameOver /> : ""}
					<Board />
					<Keyboard />
				</div>
			</AppContext.Provider>
		</div>
	);
}