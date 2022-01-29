export const bfs = (grid, startNode, endNode) => {
  const nodesInOrder = [];
  const queue = [];
  queue.push(startNode);

  while (queue.length > 0) {
    console.log('running');
    let node = queue.shift();
    nodesInOrder.push(node);
    if (node === endNode) {
      break;
    }

    let neighbours = getNeighbours(grid, node);
    for (let i = 0; i < neighbours.length; i++) {
      let nei = neighbours[i];
      nei.isVisited = true;
      nei.previousNode = node;
      queue.push(nei);
    }
  }
  startNode.previousNode = null;
  return nodesInOrder;
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
  return nodes.filter((nei) => !nei.isVisited);
};
