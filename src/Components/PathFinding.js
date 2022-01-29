import React, { useState, useEffect } from 'react';
import Node from './Node';
import { dijkstra, getShortestPath } from '../Algorithms/dijkstra';
import { bfs } from '../Algorithms/bfs';
import { dfs } from '../Algorithms/dfs';

const PathFinding = () => {
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState([7, 10]);
  const [end, setEnd] = useState([7, 40]);

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  const runDijkstra = () => {
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

  const runBfs = () => {
    let nodes = bfs(grid, grid[start[0]][start[1]], grid[end[0]][end[1]]);
    console.log(nodes);
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
        document.getElementById(
          `${node.row}-${node.col}`
        ).style.backgroundColor = 'green';
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

  const createNode = (row, col) => {
    return {
      row,
      col,
      distance: Infinity,
      isEnd: row === end[0] && col === end[1],
      isStart: row === start[0] && col === start[1],
      isVisited: false,
      previousNode: null,
    };
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
    </div>
  );
};

export default PathFinding;
