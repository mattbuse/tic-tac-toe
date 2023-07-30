import React from 'react';
import '../App.css';

export function Home() {

  return (
    <div className="home">
      <div className="home-text">
        <h2>Welcome to my Tic-Tac-Toe Game</h2>
        <p>This game was entirely my creation and built with React Router, useState and useEffect.</p>
        <p>There are two versions...</p>
        <p>Play against Human - you can play against another person, or play both parts on your own for fun.</p>
        <p>Play against Computer - the computer will go first, and pick a random square for each turn.</p>
        <p>Click a button above to select a game.</p>
      </div>
    </div>
  );
}


