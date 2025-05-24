import React, { useState } from "react";
import { calculateWinner } from "../calculateWinner";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningLine, setWinningLine] = useState([]);

  const handleClick = (index) => {
    if (squares[index] || winner) return;
    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    const result = calculateWinner(newSquares);

    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else if (!winner && newSquares.every((square) => square !== null)) {
      setIsDraw(true);
    }
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
    setWinningLine([]);
  };

  const status = winner
    ? ` 🎉 Winner: ${winner}`
    : isDraw
    ? "It is a Draw!🤝"
    : `Turn: ${isXTurn ? "X" : "O"}`;

  const renderSquare = (index) => {
    const isWinningSquare = winningLine.includes(index);
    return (
      <div
        key={index}
        onClick={() => handleClick(index)}
        className={`w-24 h-24 border-2 border-gray-500 flex  items-center justify-center text-2xl font-bold cursor-pointer hover:bg-gray-200
        ${
          isWinningSquare
            ? "bg-green-400 text-white border-green-400"
            : "bg-white hover:bg-gray-200 border-gray-500"
        }`}
      >
        {squares[index]}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-2xl font-bold text-center my-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow">
          {status}
        </p>

        {/* Board Logic */}
        <div className="grid grid-cols-3 gap-6">
          {squares.map((_, index) => renderSquare(index))}
        </div>

        {/* Status Logic */}
        <p className="text-xl font-bold text-center my-4">
          {(winner || isDraw) && (
            <button
              onClick={handleReset}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Restart
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Board;
