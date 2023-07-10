import React from 'react';
import { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isVisible, setIsVisible] = useState(false);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const moves = history.map((squares, move) => {
    let description;
    (move > 0 ? 
      (description = 'Go to move #' + move) : (description = 'Go to game start'))
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div>
      {!isVisible && (
      <div className="landing">
        <h1>TicTacToe</h1>
        <button className="button--start" onClick={toggleVisibility}>Start</button>
      </div>
      )}
      
    {isVisible && (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    )}
    <footer>
      <p>Ryan Phoen</p>
    </footer>
    </div>
  );
}

export default Game