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

export const resetGrid = (updateGrid, grid) => {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[0].length; j++) {
      let oldNode = grid[i][j];
      let newNode = { ...oldNode };
      if (!oldNode.isEnd && !oldNode.isEnd) {
        newNode.isVisited = false;
        newNode.isWall = false;
      }
      row.push(newNode);
      document.getElementById(`${i}-${j}`).classList.remove('visited');
      document.getElementById(`${i}-${j}`).classList.remove('shortest');
    }
    newGrid.push(row);
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
  setRunning,
  setSuccess
) => {
  setRunning(true);
  if (name === 'bidirectionalbfs') {
    const { nodes, middleA, middleB, success } = algorithm(
      grid,
      grid[startNode[0]][startNode[1]],
      grid[endNode[0]][endNode[1]]
    );
    let shortestPathNodes = shortestPath(
      grid[endNode[0]][endNode[1]],
      middleA,
      middleB
    );
    console.log(success, nodes);
    animatePath(
      nodes,
      shortestPathNodes,
      speed,
      setRunning,
      success,
      setSuccess
    );
    return;
  } else if (name === 'dfs') {
    const { nodes, success } = algorithm(
      grid,
      grid[startNode[0]][startNode[1]],
      grid[endNode[0]][endNode[1]]
    );
    animatePath(nodes, nodes, speed, setRunning, success, setSuccess);
    return;
  }

  const { nodes, success } = algorithm(
    grid,
    grid[startNode[0]][startNode[1]],
    grid[endNode[0]][endNode[1]]
  );
  const shortestPathNodes = shortestPath(grid[endNode[0]][endNode[1]]);
  animatePath(
    nodes,
    shortestPathNodes.reverse(),
    speed,
    setRunning,
    success,
    setSuccess
  );
};

export const animatePath = (
  path,
  shortestPath,
  speed,
  setRunning,
  success,
  setSuccess
) => {
  setSuccess(success);
  for (let i = 0; i < path.length; i++) {
    if (path[i].isStart) {
      continue;
    }
    if (i === path.length - 1) {
      if (!success) {
        setRunning(false);
        return;
      }
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

export const cleanGrid = (grid, updateGrid) => {
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[0].length; j++) {
      document.getElementById(`${i}-${j}`).classList.remove('visited');
      document.getElementById(`${i}-${j}`).classList.remove('shortest');
      let oldNode = grid[i][j];
      let newNode = { ...oldNode, isVisited: false };
      row.push(newNode);
    }
    newGrid.push(row);
  }
  updateGrid(newGrid);
};

export const clearWalls = (updateGrid, grid) => {
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[0].length; j++) {
      let node = grid[i][j];
      if (node.isWall) {
        node.isWall = false;
      }
      document.getElementById(`${i}-${j}`).classList.remove('wall');
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

export const clearPath = (updateGrid, grid) => {
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[0].length; j++) {
      let node = grid[i][j];
      document.getElementById(`${i}-${j}`).classList.remove('shortest');
      row.push(node);
    }
    newGrid.push(row);
  }
  updateGrid(newGrid);
};

export const terrainGenerator = (
  grid,
  startNode,
  endNode,
  genFunction,
  updateGrid,
  name
) => {
  const start = grid[startNode[0]][startNode[1]];
  const end = grid[endNode[0]][endNode[1]];

  if (name === 'random') {
    let nodes = genFunction(grid, start, end);
    updateGrid(nodes);
    return;
  }

  let nodes = [];
  const newGrid = genFunction(
    nodes,
    grid,
    start,
    end,
    2,
    grid.length - 3,
    2,
    grid[0].length - 3,
    'horizontal',
    false,
    'wall'
  );
  updateGrid(newGrid);
};

export const animateInstantly = (
  name,
  grid,
  algorithm,
  startNode,
  endNode,
  shortestPath,
  updateGrid
) => {
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
    instantAnimatePath(nodes, shortestPathNodes, grid);
    return;
  } else if (name === 'dfs') {
    const { nodes } = algorithm(
      grid,
      grid[startNode[0]][startNode[1]],
      grid[endNode[0]][endNode[1]]
    );
    instantAnimatePath(nodes, nodes, grid);
    return;
  }

  const { nodes } = algorithm(
    grid,
    grid[startNode[0]][startNode[1]],
    grid[endNode[0]][endNode[1]]
  );
  const shortestPathNodes = shortestPath(grid[endNode[0]][endNode[1]]);
  instantAnimatePath(nodes, shortestPathNodes.reverse(), grid);
};

const instantAnimatePath = (path, shortestPath, grid) => {
  const newGrid = [];
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let oldNode = grid[i][j];
      let newNode = { ...oldNode };
      if (newNode.isEnd || newNode.isStart) {
        row.push(newNode);
        continue;
      }
      newNode.isVisited = false;
      row.push(newNode);
    }
    newGrid.push(row);
  }
  for (let node of path) {
    if (node.isStart || node.isEnd) {
      continue;
    }
    const { row, col } = node;
    document.getElementById(`${row}-${col}`).classList.add('visited');
    newGrid[row][col].isVisited = true;
  }

  for (let node of shortestPath) {
    if (node.isStart || node.isEnd) {
      continue;
    }
    const { row, col } = node;
    document.getElementById(`${row}-${col}`).classList.add('shortest');
  }
  // updateGrid(newGrid);
};
