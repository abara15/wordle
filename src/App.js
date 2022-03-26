import { createContext, useState } from 'react';
import './App.css';
import { Board, Keyboard } from './components';
import { boardDefault } from './constants/Words';

export const AppContext = createContext();

function App() {
	// Initialize the board with its default state
    const [board, setBoard] = useState(boardDefault);
	const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

	const myWord = "IRATE";

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
		if (currAttempt.letterPos !== 5) return;
		setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
	};

	return (
		<div className="App">
			<nav>
				<h3>Wordle</h3>
			</nav>
			<AppContext.Provider 
				value={{
					board,
					setBoard,
					currAttempt,
					setCurrAttempt,
					onSelectLetter,
					onDelete,
					onEnter,
					myWord
				}}
			>
				<div className='game'>
					<Board />
					<Keyboard />
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
