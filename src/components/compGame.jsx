import React, { useState, useEffect } from 'react';
import '../App.css';
import { Square } from './square';
import { FreeSquare } from './freeSquare';

const newSquares = [
  {
    id: 1,
    letter: '',
    free: true
  },
  {
    id: 2,
    letter: '',
    free: true
  },
  {
    id: 3,
    letter: '',
    free: true
  },
  {
    id: 4,
    letter: '',
    free: true
  },
  {
    id: 5,
    letter: '',
    free: true
  },
  {
    id: 6,
    letter: '',
    free: true
  },
  {
    id: 7,
    letter: '',
    free: true
  },
  {
    id: 8,
    letter: '',
    free: true
  },
  {
    id: 9,
    letter: '',
    free: true
  }

]

export function CompGame() {
  const [ winner, setWinner ] = useState('');
  const [ tie, setTie ] = useState('');
  const [ compTurn, setCompTurn ] = useState('');
  const [ squares, setSquares ] = useState(newSquares);

  function compMove() {
    if (compTurn === 'Computer') {
    let availableSquares = squares.filter(square => square.free === true);
    let i = Math.floor(Math.random() * availableSquares.length)
    markCompLetter(availableSquares[i].id)
    setCompTurn('Computer')
    } else {
      return
    }
  }

  function markCompLetter(id) {
    let markAnX = squares.map(square => 
      {
        if (square.id === id && square.free === true) {
          return { ...square, letter: 'X', free: false};
        } return square;
      });
        setSquares(markAnX);
  }

  function markHumanLetter(id) {
    if (compTurn === 'Human') {
      let markAnO = squares.map(square => 
        {
          if (square.id === id && square.free === true) {
            return { ...square, letter: 'O', free: false};
          } return square;
        });
        setSquares(markAnO)
    }
  }

  function resetGame() {
    setSquares(newSquares);
    setCompTurn('Computer');
    setWinner('');
    setTie('');
  }

  function checkFreeSquares() {
    let totalLetters = 0;
    for (let i=0; i < squares.length; i++) {
      if (squares[i].free !== true) {
        totalLetters++
      }
      changeTurn(totalLetters);
      checkForWinner(totalLetters);
    }
  }

  function changeTurn(letters) {
    if (letters === 0 || letters % 2 == 0) {
      setCompTurn('Computer')
    } else {
      setCompTurn('Human')
    }
  }

  function checkForWinner(letters) {
    if (squares[0].letter === 'X' && squares[3].letter === 'X' && squares[6].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[1].letter === 'X' && squares[4].letter === 'X' && squares[7].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[2].letter === 'X' && squares[5].letter === 'X' && squares[8].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[0].letter === 'X' && squares[1].letter === 'X' && squares[2].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[3].letter === 'X' && squares[4].letter === 'X' && squares[5].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[6].letter === 'X' && squares[7].letter === 'X' && squares[8].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[0].letter === 'X' && squares[4].letter === 'X' && squares[8].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[2].letter === 'X' && squares[4].letter === 'X' && squares[6].letter === 'X') {
      alertWinner('Computer')
    } else if (squares[0].letter === 'O' && squares[3].letter === 'O' && squares[6].letter === 'O') {
      alertWinner('Human')
    } else if (squares[1].letter === 'O' && squares[4].letter === 'O' && squares[7].letter === 'O') {
      alertWinner('Human')
    } else if (squares[2].letter === 'O' && squares[5].letter === 'O' && squares[8].letter === 'O') {
      alertWinner('Human')
    } else if (squares[0].letter === 'O' && squares[1].letter === 'O' && squares[2].letter === 'O') {
      alertWinner('Human')
    } else if (squares[3].letter === 'O' && squares[4].letter === 'O' && squares[5].letter === 'O') {
      alertWinner('Human')
    } else if (squares[6].letter === 'O' && squares[7].letter === 'O' && squares[8].letter === 'O') {
      alertWinner('Human')
    } else if (squares[0].letter === 'O' && squares[4].letter === 'O' && squares[8].letter === 'O') {
      alertWinner('Human')
    } else if (squares[2].letter === 'O' && squares[4].letter === 'O' && squares[6].letter === 'O') {
      alertWinner('Human')
    } else {
      checkForTie(letters);
    }
  }

  function checkForTie(letters) {
    if (letters === 9 && winner === '') {
      setTie('Tie')
    }
  }

  function alertWinner(winner) {
    setWinner(winner);
  }

  function theWinner(winner) {
    let theWinner = '';
    if (winner === 'Computer') {
      theWinner = 'The Computer has'
    } else if (winner === 'Human') {
      theWinner = 'You have'
    }
    return theWinner
  }

  useEffect(() => {
    checkFreeSquares();
  }, [squares])

  useEffect(() => {
    if (winner === '') {
    setTimeout(compMove, 1000);
    }
  }, [compTurn, winner])

  return (
    <div className="game">
      <h3 className="game-type">You vs Computer</h3>
      <div className="computer-game">
        {winner && <p className="header">{theWinner(winner)} won the game! </p>}
        {tie && <p className="header">The game is a Tie! 🐈</p>}
          {winner === '' && <div className="square-grid">{squares.map((square) => <FreeSquare key={square.id} data={square} markLetter={markHumanLetter} />)}</div> }
          {winner && <div className="square-grid">{squares.map((square) => <Square key={square.id} data={square} />)}</div> }
          <div className="game-buttons" >
            <button className="game-button" onClick={resetGame}>Reset Game</button>
          </div>
        </div>
      </div>
  );
}



