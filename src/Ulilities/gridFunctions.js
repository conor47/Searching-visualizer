// function for generating basic grid

export const generateGrid = () => {
  let grid = [];
  for (let i = 0; i < 25; i++) {
    let row = [];
    for (let j = 0; j < 60; j++) {
      row.push(createNode(i, j));
    }
    grid.push(row);
  }
  return grid;
};

export const resetGrid = (updateGrid) => {
  const newGrid = generateGrid();
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 60; j++) {
      document.getElementById(`${i}-${j}`).classList.remove('visited');
      document.getElementById(`${i}-${j}`).classList.remove('shortest');
    }
  }
  updateGrid(newGrid);
};

// function for creating a node object

export const createNode = (row, col) => {
  return {
    row,
    col,
    distance: Infinity,
    isEnd: row === 7 && col === 48,
    isStart: row === 7 && col === 10,
    isVisited: false,
    previousNode: null,
    isWall: false,
    gCost: Infinity,
    hCost: Infinity,
    fCost: Infinity,
  };
};

export const runAlgorithm = (
  name,
  grid,
  algorithm,
  startNode,
  endNode,
  shortestPath,
  speed,
  setRunning
) => {
  setRunning(true);
  if (name === 'bidirectionalbfs') {
    const { nodes, middleA, middleB } = algorithm(
      grid,
      grid[startNode[0]][startNode[1]],
      grid[endNode[0]][endNode[1]]
    );
    let shortestPathNodes = shortestPath(
      grid[endNode[0]][endNode[1]],
      middleA,
      middleB
    );
    animatePath(nodes, shortestPathNodes, speed, setRunning);
    return;
  } else if (name === 'dfs') {
    const nodes = algorithm(
      grid,
      grid[startNode[0]][startNode[1]],
      grid[endNode[0]][endNode[1]]
    );
    animatePath(nodes, nodes, speed, setRunning);
    return;
  }

  const nodes = algorithm(
    grid,
    grid[startNode[0]][startNode[1]],
    grid[endNode[0]][endNode[1]]
  );
  const shortestPathNodes = shortestPath(grid[endNode[0]][endNode[1]]);
  animatePath(nodes, shortestPathNodes.reverse(), speed, setRunning);
};

export const animatePath = (path, shortestPath, speed, setRunning) => {
  for (let i = 0; i < path.length; i++) {
    if (path[i].isStart) {
      continue;
    }
    if (i === path.length - 1) {
      setTimeout(() => {
        animateShortest(shortestPath, speed, setRunning);
      }, i * speed);
    }
    setTimeout(() => {
      let node = path[i];
      if (node.isEnd) {
        return;
      }
      document
        .getElementById(`${node.row}-${node.col}`)
        .classList.add('visited');
    }, i * speed);
  }
};

export const animateShortest = (path, speed, setRunning) => {
  for (let i = 0; i < path.length; i++) {
    if (path[i].isStart) {
      continue;
    }
    setTimeout(() => {
      if (path[i].isEnd) {
        setRunning(false);
        return;
      }
      let node = path[i];
      document
        .getElementById(`${node.row}-${node.col}`)
        .classList.add('shortest');
    }, i * (speed * 5));
  }
};

export const getShortestPath = (endNode) => {
  let cur = endNode;
  const nodes = [];
  while (cur) {
    nodes.push(cur);
    cur = cur.previousNode;
  }
  return nodes;
};

export const updateWall = (row, col, start, end, grid, updateGrid, addWall) => {
  if (
    (row === start[0] && col === start[1]) ||
    (row === end[0] && col === end[1])
  ) {
    return;
  }
  const node = grid[row][col];
  const newGrid = grid.slice();
  const newNode = { ...node, isWall: addWall };
  newGrid[row][col] = newNode;
  updateGrid(newGrid);
};

export const cleanGrid = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      document.getElementById(`${i}-${j}`).classList.remove('visited');
      document
        .getElementById(`${i}-${j}`)
        .classList.remove('<shortest></shortest>');
    }
  }
};

export const clearWalls = (grid, updateGrid) => {
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

export const clearVisited = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      document.getElementById(`${i}-${j}`).classList.remove('visited');
    }
  }
};

export const terrainGenerator = (
  grid,
  startNode,
  endNode,
  genFunction,
  updateGrid
) => {
  const start = grid[startNode[0]][startNode[1]];
  const end = grid[endNode[0]][endNode[1]];

  const newGrid = genFunction(grid, start, end);
  updateGrid(newGrid);
};
