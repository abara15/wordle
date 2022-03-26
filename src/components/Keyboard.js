import React, { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
    const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

    const l1_keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const l2_keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const l3_keys = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = useCallback((event) => {
        switch (event.key) {
            case "Enter":
                onEnter();
                break;

            case "Backspace":
                onDelete();
                break;
        
            default:
                l1_keys.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
                l2_keys.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
                l3_keys.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
                break;
        }
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        };
    }, [handleKeyboard]);

    return (
        <div className='keyboard' onKeyDown={handleKeyboard}>
            <div className='line1'>
                {l1_keys.map((key, index) => (
                    <Key keyVal={key} />
                ))}
            </div>
            <div className='line2'>
                {l2_keys.map((key, index) => (
                    <Key keyVal={key} />
                ))}
            </div>
            <div className='line3'>
                <Key keyVal="ENTER" bigKey={true} />
                {l3_keys.map((key, index) => (
                    <Key keyVal={key} />
                ))}
                <Key keyVal="DELETE" bigKey={true} />
            </div>
        </div>
    );
}

export default Keyboard;