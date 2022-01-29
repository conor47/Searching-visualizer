import React, { useState, useEffect } from 'react';

const Node = ({ row, col, isStart, isEnd }) => {
  return (
    <div
      id={`${row}-${col}`}
      className={`node ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''}`}
    ></div>
  );
};

export default Node;
