import React from 'react';

export const Square = (props) => {
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
            <div style={getBackground(letter)} className="frozen-square" >{letter}</div>
        </>
    )
}

