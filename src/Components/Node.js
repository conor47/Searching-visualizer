import React from 'react';

const Node = ({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
}) => {
  return (
    <div
      id={`${row}-${col}`}
      className={`node ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''} ${
        isWall ? 'wall' : ''
      }`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseUp()}
    ></div>
  );
};

export default Node;
