import React, { useState } from "react";
import { boardDefault } from '../constants/Words';

const initialState = {
    board: boardDefault,
    currAttempt: {
        attempt: 0,
        letterPos: 0
    },
    wordSet: new Set(),
    guessSet: new Set(),
    disabledLetters: [],
    almostLetters: [],
    correctLetters: [],
    gameOver: {
        gameOver: false,
        guessedWord: false
    },
    correctWord: ''
};

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};

export default Store;