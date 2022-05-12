import React, { useContext } from 'react';
import { IoMdReturnLeft } from "react-icons/io";
import { IoBackspaceSharp } from "react-icons/io5";
import { AppContext } from '../../App';

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

    const val = () => {
        if (keyVal === "ENTER") {
            return <IoMdReturnLeft />;
        } else if (keyVal === "DELETE") {
            return <IoBackspaceSharp />;
        } else {
            return keyVal
        }
    }

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