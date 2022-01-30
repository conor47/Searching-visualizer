const astar = (grid, startNode, endNode) => {
  let openSet = [startNode];
  let closedSet = new Set();

  while (openSet.length > 0) {
    let idx = 0;
    let currentNode = openSet[0];

    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].fCost < currentNode.fCost) {
        currentNode = openSet[i];
        idx = i;
      } else if (
        openSet[i].fCost === currentNode.fCost &&
        openSet[i].hCost < currentNode.hCost
      ) {
        currentNode = openSet[i];
        idx = i;
      }
    }
    openSet.pop(idx);
    closedSet.add(currentNode);

    if (currentNode === endNode) {
      return;
    }

    const neighbours = getNeighbours(grid, currentNode);
    for (let nei of neighbours) {
      if (closedSet.has(nei)) {
        continue;
      }
    }
  }
};

const getDistance = (nodeA, nodeB, grid) => {};

const getNeighbours = (grid, node) => {
  const nodes = [];
  const { row, col } = node;
  if (row > 0) {
    nodes.push(grid[row - 1][col]);
  }
  if (row < grid.length - 1) {
    nodes.push(grid[row + 1][col]);
  }
  if (col > 0) {
    nodes.push(grid[row][col - 1]);
  }
  if (col < grid[0].length - 1) {
    nodes.push(grid[row][col + 1]);
  }
  if (col > 0 && row > 0) {
    nodes.push(grid[row - 1][col - 1]);
  }
  if (col < grid[0].length - 1 && row > 0) {
    nodes.push(grid[row - 1][col + 1]);
  }
  if (row < grid.length - 1 && col > 0) {
    nodes.push(grid[row + 1][col - 1]);
  }
  if (row < grid.length - 1 && col < grid[0].length - 1) {
    nodes.push(grid[row + 1][col + 1]);
  }
  return nodes.filter((nei) => !nei.isWall);
};
