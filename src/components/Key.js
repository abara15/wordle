import React, { useContext } from 'react'
import { AppContext } from '../App';

function Key({ keyVal, bigKey, disabled, almost, correct }) {
    const {
        onSelectLetter,
        onDelete,
        onEnter
    } = useContext(AppContext);

    const selectLetter = () => {
        switch (keyVal) {
            case "ENTER":
                onEnter();
                break;
            case "DELETE":
                onDelete();
                break;
            default:
                onSelectLetter(keyVal);
                break;
        }
    }

    const keyColor = () => {
        if (disabled) {
            return "disabled";
        } else if (almost) {
            return "almost";
        } else if (correct) {
            return "correct";
        }
    }

    return (
        <div
            className='key'
            id={bigKey ? "big" : keyColor()}
            onClick={selectLetter}
        >
            {keyVal}
        </div>
    );
}

export default Key;