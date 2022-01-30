// function for generating basic grid

export const generateGrid = () => {
  let grid = [];
  for (let i = 0; i < 21; i++) {
    let row = [];
    for (let j = 0; j < 50; j++) {
      row.push(createNode(i, j));
    }
    grid.push(row);
  }
  return grid;
};

// function for creating a node object

export const createNode = (row, col) => {
  return {
    row,
    col,
    distance: Infinity,
    isEnd: row === 7 && col === 40,
    isStart: row === 7 && col === 10,
    isVisited: false,
    previousNode: null,
    isWall: false,
    gCost: Infinity,
    hCost: Infinity,
    fCost: Infinity,
  };
};

const runAlgorithm = (
  name,
  grid,
  algorithm,
  startNode,
  endNode,
  animatePath,
  shortestPath,
  animateShortest
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
    animatePath(nodes);
    animateShortest(shortestPath);
    return;
  }

  const nodes = algorithm(
    grid,
    grid[startNode[0]][startNode[1]],
    grid[endNode[0]][endNode[1]]
  );
  const shortestPathNodes = shortestPath(grid[endNode[0]][endNode[1]]);
  animatePath(nodes);
  animateShortest(shortestPath);
};

export const animatePath = (path) => {
  for (let i = 0; i < path.length; i++) {
    setTimeout(() => {
      let node = path[i];
      document
        .getElementById(`${node.row}-${node.col}`)
        .classList.add('visited');
    }, i * 50);
  }
};

export const animateShortest = (path) => {
  for (let i = 0; i < path.length; i++) {
    setTimeout(() => {
      let node = path[i];
      document
        .getElementById(`${node.row}-${node.col}`)
        .classList.add('shortest');
    }, i * 50);
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
