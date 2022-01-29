import React, { useState, useEffect } from 'react';
import Node from './Node';
import { dijkstra, getShortestPath } from '../Algorithms/dijkstra';
import { bfs } from '../Algorithms/bfs';
import { dfs } from '../Algorithms/dfs';
import {
  bidrectionalBFS,
  getShortestPathBiDirectional,
} from '../Algorithms/bidirectionalBFS';

const PathFinding = () => {
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState([7, 10]);
  const [end, setEnd] = useState([7, 40]);
  const [moveEnd, setMoveEnd] = useState(false);
  const [moveStart, setMoveStart] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  const runDijkstra = () => {
    clearVisited();
    let nodes = dijkstra(grid, grid[start[0]][start[1]], grid[end[0]][end[1]]);
    let shortestPath = getShortestPath(grid[end[0]][end[1]]);

    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      if (i === nodes.length - 1) {
        setTimeout(() => {
          animatePath(shortestPath);
        }, i * 10);
      } else {
        setTimeout(() => {
          document
            .getElementById(`${node.row}-${node.col}`)
            .classList.add('visited');
        }, i * 10);
      }
    }
  };

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
    generateUpdatedGrid(row, col);
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
      generateUpdatedGrid(row, col);
    }
  };

  const runBidirectionalBFS = () => {
    clearVisited();
    const { nodes, middleA, middleB } = bidrectionalBFS(
      grid,
      grid[start[0]][start[1]],
      grid[end[0]][end[1]]
    );
    let shortestPath = getShortestPathBiDirectional(
      grid[end[0]][end[1]],
      middleA,
      middleB
    );
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      if (i === nodes.length - 1) {
        setTimeout(() => {
          animatePath(shortestPath);
        }, i * 10);
      } else {
        setTimeout(() => {
          document
            .getElementById(`${node.row}-${node.col}`)
            .classList.add('visited');
        }, i * 10);
      }
    }
  };

  const runBfs = () => {
    clearVisited();
    let nodes = bfs(grid, grid[start[0]][start[1]], grid[end[0]][end[1]]);
    let shortestPath = getShortestPath(grid[end[0]][end[1]]);
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      if (i === nodes.length - 1) {
        setTimeout(() => {
          animatePath(shortestPath);
        }, i * 10);
      } else {
        setTimeout(() => {
          document
            .getElementById(`${node.row}-${node.col}`)
            .classList.add('visited');
        }, i * 10);
      }
    }
  };

  const runDFS = () => {
    clearVisited();
    let nodes = dfs(grid, grid[start[0]][start[1]], grid[end[0]][end[1]]);
    console.log(nodes);
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      if (i === nodes.length - 1) {
        setTimeout(() => {
          animatePath(nodes);
        }, i * 10);
      } else {
        setTimeout(() => {
          document
            .getElementById(`${node.row}-${node.col}`)
            .classList.add('visited');
        }, i * 10);
      }
    }
  };

  const animatePath = (path) => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        let node = path[i];
        document
          .getElementById(`${node.row}-${node.col}`)
          .classList.add('shortest');
      }, i * 50);
    }
  };

  const generateGrid = () => {
    let grid = [];
    for (let i = 0; i < 20; i++) {
      let row = [];
      for (let j = 0; j < 50; j++) {
        row.push(createNode(i, j));
      }
      grid.push(row);
    }
    return grid;
  };

  const moveStartNode = (row, col) => {
    const newGrid = grid.slice();

    let oldStart = grid[start[0]][start[1]];
    let updatedOld = { ...oldStart, isStart: false };
    newGrid[oldStart.row][oldStart.col] = updatedOld;

    let newStart = grid[row][col];
    let newUpdatedStart = { ...newStart, isStart: true };
    newGrid[row][col] = newUpdatedStart;

    setStart([row, col]);
    setGrid(newGrid);
  };

  const moveEndNode = (row, col) => {
    const newGrid = grid.slice();

    let oldEnd = grid[end[0]][end[1]];
    let updatedOld = { ...oldEnd, isEnd: false };
    newGrid[oldEnd.row][oldEnd.col] = updatedOld;

    let newEnd = grid[row][col];
    let newUpdatedEnd = { ...newEnd, isEnd: true };
    newGrid[row][col] = newUpdatedEnd;

    setEnd([row, col]);
    setGrid(newGrid);
  };

  const generateUpdatedGrid = (row, col) => {
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
    setGrid(newGrid);
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
    setGrid(newGrid);
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
    setGrid(newGrid);
  };

  return (
    <div>
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
        <button onClick={() => runBidirectionalBFS()}>Bidirectional BFS</button>
      </div>
      <div className="controls">
        <button onClick={() => clearWalls()}>Clear Walls</button>
      </div>
      <div className="grid">
        {grid.map((row, i) => {
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
