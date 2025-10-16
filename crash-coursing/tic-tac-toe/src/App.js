import { useState } from 'react';

/*
  1. Square is a child component that receives props from Board.
  2. Board is the parent component that manages the state of all squares. 
  The Board component defines the handleClick function that will update the squares state when a square is clicked.
  3. When a Square is clicked, it calls the onSquareClick function passed from Board, which calls handleClick with the index of the square.
  4. When setSquares is finally called, React knows the state of the component changed. 
  By default, all child components re-render automatically when the state of a parent component changes.
  5. The Square component receives the updated value prop from Board and displays it.
  
*/

function Square({value, onSquareClick}) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
);
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // If square already filled or if there's a winner, immediately return in the function without updating
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    // Updates squares[i]
    // setSquares lets React know the state of the component changed, triggering a re-render
    setSquares(nextSquares); 
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
    
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/*
[0, 1, 2]
[3, 4, 5]
[6, 7, 8]

A player wins if they have three of the same marks (X or O) in any of the patterns:
[0, 1, 2], [3, 4, 5], [6, 7, 8] (rows)
[0, 3, 6], [1, 4, 7], [2, 5, 8] (columns)
[0, 4, 8], [2, 4, 6] (diagonals)
*/

function calculateWinner(squares) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i]; // Destructure the indices of the winning combination
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
