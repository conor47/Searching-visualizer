import React, { useState, useEffect } from 'react';
import Node from './Node';

const PathFinding = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const newGrid = [];
    for (let i = 0; i < 15; i++) {
      let row = [];
      for (let j = 0; j < 50; j++) {
        row.push([]);
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  }, []);

  return (
    <div className="grid">
      {grid.map((row, i) => {
        return (
          <div className="row">
            {row.map((col, j) => {
              return <Node />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PathFinding;
