import { createContext, useState } from 'react';
import './App.css';
import { Board, Keyboard } from './components';
import { boardDefault } from './constants/Words';

export const AppContext = createContext();

function App() {
	// Initialize the board with its default state
    const [board, setBoard] = useState(boardDefault);

	return (
		<div className="App">
			<nav>
				<h3>Wordle</h3>
			</nav>
			<AppContext.Provider value={{ board, setBoard }}>
				<div className='game'>
					<Board />
					<Keyboard />
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
