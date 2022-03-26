import wordGuesses from "../constants/word-guesses.txt";
import wordBank from "../constants/word-bank.txt";

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

export const generateGuessSet = async () => {
    let guessSet;
    await fetch(wordGuesses)
        .then((response) => response.text())
        .then((result) => {
            const guessArr = result.split("\n");
            guessSet = new Set(guessArr);
        });
    
    return { guessSet };
}

export const generateWordSet = async () => {
    let wordSet;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n");
            wordSet = new Set(wordArr);
        });
    
    return { wordSet };
}