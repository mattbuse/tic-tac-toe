import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export function NavBar() {

  return (
    <div className="navbar">
      <header className="navbar-header">
        <Link to='/' ><h1 className="title">Tic-Tac-Toe</h1></Link>
        <div className="links">
          <a href='https://mattbuse.github.io/Portfolio_Page/'>HOME</a>
          <a href='https://mattbuse.github.io/Portfolio_Page/JS-Projects/Projects/projects.html'>PROJECTS</a>
        </div>
      </header>
      <div className="game-buttons">
          <Link to='/humangame' ><button className="game-button">Play Against Human</button></Link>
          <Link to='/computergame' ><button className="game-button">Play Against Computer</button></Link>
      </div>
    </div>
  );
}

