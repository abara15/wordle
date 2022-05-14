import React, { useContext } from 'react';
import { FiDelete } from "react-icons/fi";
import { Context } from '../../context/Store';
import './Key.scss';

function Key({ keyVal, bigKey, disabled, almost, correct, onSelectLetter, onDelete, onEnter }) {

    const [state, setState] = useContext(Context);

    const selectLetter = () => {
        if (state.gameOver.gameOver) return;

        switch(keyVal) {
            case "ENTER":
                console.log("ENTER CLICKED...... :)");
                onEnter();
                break;
            case "DELETE":
                console.log("DELETE CLICKED...... :)");
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

    const val = () => {
        if (keyVal === "ENTER") {
            return <span style={{ fontSize: 12}}>ENTER</span>;
        } else if (keyVal === "DELETE") {
            return <FiDelete fontSize={25} />;
        } else {
            return keyVal;
        }
    };

    return (
        <div
            className='key'
            id={bigKey ? "big" : keyColor()}
            onClick={selectLetter}
        >
            {val()}
        </div>
    );
}

export default Key;