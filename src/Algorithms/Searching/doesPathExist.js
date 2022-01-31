// Simple bfs function for determining whether a valid path exists

export const doesPathExist = (startNode, endNode, grid) => {
  const queue = [];
  queue.push(startNode);

  while (queue.length > 0) {
    let node = queue.shift();
    if (node === endNode) {
      return true;
    }

    let neighbours = getNeighbours(grid, node);
    for (let i = 0; i < neighbours.length; i++) {
      let nei = neighbours[i];
      nei.isVisited = true;
      queue.push(nei);
    }
  }
  return false;
};

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
  return nodes.filter((nei) => !nei.isVisited && !nei.isWall);
};
