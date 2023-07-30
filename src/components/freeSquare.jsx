import React from 'react';

export const FreeSquare = (props) => {
    const { id, letter, free } = props.data;

    const taken = {
        backgroundColor: letter === 'X' ? 'blue' : '#282c34',
        backgroundColor: letter === 'O' ? 'red' : '#282c34'
    }

    function getBackground(letter) {
        if (letter === 'X') {
            return {backgroundColor: 'red'}
        } else if (letter === 'O') {
            return {backgroundColor: 'blue'}
        }
    }

    return (
        <>
            <div style={getBackground(letter)} className="square" onClick={(() => props.markLetter(id))}>{letter}</div>
        </>
    )
}

