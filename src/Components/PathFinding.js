import React, { useState, useEffect } from 'react';

import Node from './Node';
import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import { updateWall } from '../Ulilities/gridFunctions';

const PathFinding = () => {
  const [moveEnd, setMoveEnd] = useState(false);
  const [moveStart, setMoveStart] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [addWall, setAddWall] = useState(false);

  const {
    grid,
    updateGrid,
    setStartNode,
    setEndNode,
    startNode: start,
    endNode: end,
  } = useSearchingContext();
  const { closeSubmenu } = useNavbarContext();

  useEffect(() => {
    document.getElementById('temp').ondragstart = function () {
      return false;
    };
  }, [grid]);

  const handleMouseDown = (row, col) => {
    if (row === start[0] && col === start[1]) {
      setMouseDown(true);
      setMoveStart(true);
      return;
    } else if (row === end[0] && col == end[1]) {
      setMouseDown(true);
      setMoveEnd(true);
      return;
    } else if (grid[row][col].isWall) {
      setMouseDown(true);
      updateWall(row, col, start, end, grid, updateGrid, addWall);
    } else {
      setMouseDown(true);
      setAddWall(true);
      updateWall(row, col, start, end, grid, updateGrid, addWall);
    }
  };

  const handleMouseUp = () => {
    setMouseDown(false);
    setMoveStart(false);
    setMoveEnd(false);
    setAddWall(false);
  };

  const handleMouseEnter = (row, col) => {
    if (mouseDown && moveStart) {
      moveStartNode(row, col);
      return;
    } else if (mouseDown && moveEnd) {
      moveEndNode(row, col);
      return;
    }

    if (mouseDown) {
      updateWall(row, col, start, end, grid, updateGrid, addWall);
    }
  };

  const moveStartNode = (row, col) => {
    const newGrid = grid.slice();

    let oldStart = grid[start[0]][start[1]];
    let updatedOld = { ...oldStart, isStart: false };
    newGrid[oldStart.row][oldStart.col] = updatedOld;

    let newStart = grid[row][col];
    let newUpdatedStart = { ...newStart, isStart: true };
    newGrid[row][col] = newUpdatedStart;

    setStartNode([row, col]);
    updateGrid(newGrid);
  };

  const moveEndNode = (row, col) => {
    const newGrid = grid.slice();

    let oldEnd = grid[end[0]][end[1]];
    let updatedOld = { ...oldEnd, isEnd: false };
    newGrid[oldEnd.row][oldEnd.col] = updatedOld;

    let newEnd = grid[row][col];
    let newUpdatedEnd = { ...newEnd, isEnd: true };
    newGrid[row][col] = newUpdatedEnd;

    setEndNode([row, col]);
    updateGrid(newGrid);
  };

  return (
    <div onMouseOver={closeSubmenu} id="temp">
      <div className="grid">
        {grid &&
          grid.map((row, i) => {
            return (
              <div className="row" key={i}>
                {row.map((node, j) => {
                  const {
                    row,
                    col,
                    isWall,
                    isEnd,
                    isStart,
                    isVisited,
                    previousNode,
                  } = grid[i][j];
                  return (
                    <Node
                      key={j}
                      row={row}
                      col={col}
                      isStart={isStart}
                      isEnd={isEnd}
                      isVisited={isVisited}
                      prevousNode={previousNode}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseDown={handleMouseDown}
                      handleMouseUp={handleMouseUp}
                      isWall={isWall}
                    />
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PathFinding;
