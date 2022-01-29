import React, { useState, useEffect } from 'react';
import Node from './Node';

const PathFinding = () => {
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState([7, 10]);
  const [end, setEnd] = useState([7, 40]);

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  const generateGrid = () => {
    let grid = [];
    for (let i = 0; i < 15; i++) {
      let row = [];
      for (let j = 0; j < 50; j++) {
        row.push(createNode(i, j));
      }
      grid.push(row);
    }
    return grid;
  };

  const createNode = (row, col) => {
    return {
      row,
      col,
      isEnd: row === end[0] && col === end[1],
      isStart: row === start[0] && col === start[1],
      isVisited: false,
      previousNode: null,
    };
  };

  return (
    <div className="grid">
      {grid.map((row, i) => {
        return (
          <div className="row" key={i}>
            {row.map((node, j) => {
              const { row, col, isEnd, isStart, isVisited, previousNode } =
                grid[i][j];
              return (
                <Node
                  key={j}
                  row={row}
                  col={col}
                  isStart={isStart}
                  isEnd={isEnd}
                  isVisited={isVisited}
                  prevousNode={previousNode}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PathFinding;
