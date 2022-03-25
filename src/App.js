import './App.css';
import { Board, Keyboard } from './components';

function App() {
	return (
		<div className="App">
			<nav>
				<h3>Wordle</h3>
			</nav>
			<Board />
			<Keyboard />
		</div>
	);
}

export default App;
