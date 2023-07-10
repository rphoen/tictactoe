import CalculateWinner from './calculateWinner';
import Square from './Square';
import React from 'react';

const Board = ({ xIsNext, squares, onPlay }) => {

  const handleClick = (i) => {
    if (squares[i] || CalculateWinner(squares)) { return; }
    const nextSquares = squares.slice();
    xIsNext ? 
      (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status;
  winner ? 
    (status = "Winner: " + winner) : 
        (!squares.includes(null)) ? 
        (status = "Draw") :
        (status = "Next player: " + (xIsNext ? "X":"O"));

  return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
    </div>   
  );
}

export default Board;