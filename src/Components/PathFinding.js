import React, { useState, useEffect } from 'react';
import Node from './Node';
import { dijkstra, getShortestPath } from '../Algorithms/dijkstra';
import { bfs } from '../Algorithms/bfs';
import { dfs } from '../Algorithms/dfs';
import {
  bidrectionalBFS,
  getShortestPathBiDirectional,
} from '../Algorithms/bidirectionalBFS';
import { astar, getShortestPathAStar } from '../Algorithms/astar';
import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import { generateGrid } from '../Ulilities/gridFunctions';

const PathFinding = () => {
  const [moveEnd, setMoveEnd] = useState(false);
  const [moveStart, setMoveStart] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

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
    }
    setMouseDown(true);
    updateWall(row, col);
  };

  const handleMouseUp = (row, col) => {
    setMouseDown(false);
    setMoveStart(false);
    setMoveEnd(false);
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
      updateWall(row, col);
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

  const updateWall = (row, col) => {
    if (
      (row === start[0] && col === start[1]) ||
      (row === end[0] && col === end[1])
    ) {
      return;
    }
    const node = grid[row][col];
    const newGrid = grid.slice();
    const newNode = { ...node, isWall: !node.isWall };
    newGrid[row][col] = newNode;
    updateGrid(newGrid);
  };

  const createNode = (row, col) => {
    return {
      row,
      col,
      distance: Infinity,
      isEnd: row === end[0] && col === end[1],
      isStart: row === start[0] && col === start[1],
      isVisited: false,
      previousNode: null,
      isWall: false,
      gCost: Infinity,
      hCost: Infinity,
      fCost: Infinity,
    };
  };

  const clearWalls = () => {
    let newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      let row = [];
      for (let j = 0; j < grid[0].length; j++) {
        let node = grid[i][j];
        if (node.isWall) {
          node.isWall = false;
        }
        row.push(node);
      }
      newGrid.push(row);
    }
    updateGrid(newGrid);
  };

  const clearVisited = () => {
    let newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      let row = [];
      for (let j = 0; j < grid[0].length; j++) {
        let node = grid[i][j];
        if (node.isVisited) {
          node.isVisited = false;
          document.getElementById(`${i}-${j}`).classList.remove('visited');
          document.getElementById(`${i}-${j}`).classList.remove('shortest');
        }
        row.push(node);
      }
      newGrid.push(row);
    }
    updateGrid(newGrid);
  };

  return (
    <div onMouseOver={closeSubmenu} id="temp">
      {/* <navbar>
        <div className="controls">
          <button onClick={() => runDijkstra()}>Dijkstra</button>
        </div>
        <div className="controls">
          <button onClick={() => runBfs()}>BFS</button>
        </div>
        <div className="controls">
          <button onClick={() => runDFS()}>DFS</button>
        </div>
        <div className="controls">
          <button onClick={() => runBidirectionalBFS()}>
            Bidirectional BFS
          </button>
        </div>
        <div className="controls">
          <button onClick={() => runAStar()}>a star</button>
        </div>
        <div className="controls">
          <button onClick={() => clearWalls()}>Clear Walls</button>
        </div>
      </navbar> */}
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
