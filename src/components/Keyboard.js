import React from 'react'

function Keyboard() {
    const l1_keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const l2_keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const l3_keys = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div className='keyboard'>
            <div className='line1'>
                {l1_keys.map((key, index) => (
                    <div>{key}</div>
                ))}
            </div>
            <div className='line2'>
                {l2_keys.map((key, index) => (
                    <div>{key}</div>
                ))}
            </div>
            <div className='line3'>
                {l3_keys.map((key, index) => (
                    <div>{key}</div>
                ))}
            </div>
        </div>
    );
}

export default Keyboard;