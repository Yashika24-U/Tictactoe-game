import React, { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (squares[index]) return;
    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  };

  const renderSquare = (index) => {
    return (
      <div
        key={index}
        onClick={() => handleClick(index)}
        className="w-24 h-24 border-2 border-gray-500 flex  items-center justify-center text-2xl font-bold cursor-pointer hover:bg-gray-200"
      >
        {squares[index]}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
};

export default Board;
