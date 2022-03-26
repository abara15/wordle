import React, { useContext } from 'react'
import { AppContext } from '../App';

function Key({ keyVal, bigKey }) {
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

    return (
        <div className='key' id={bigKey && "big"} onClick={selectLetter}>
            {keyVal}
        </div>
    );
}

export default Key;