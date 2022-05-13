import { Container } from './components';
import './App.scss';
import { useContext, useEffect } from 'react';
import { generateGuessSet, generateWordSet } from './constants/Words';
import { Context } from './context/Store';

function App() {

	const [state, setState] = useContext(Context);

	useEffect(() => {
		generateWordSet().then((words) => {
			setState(prevState => ({
				...prevState,
				correctWord: words.gameWord,
				wordSet: words.wordSet
			}));
		});

		generateGuessSet().then((guesses) => {
			setState(prevState => ({
				...prevState,
				guessSet: guesses.guessSet
			}));
		});
	}, []);

	useEffect(() => {
		console.log(state.correctWord);
	});

	return (
		<div className="App">
			<Container />
		</div>
	);
}

export default App;