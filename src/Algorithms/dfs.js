export const dfs = (grid, startNode, endNode) => {
  const nodesInOrder = [];
  recurse(grid, startNode, nodesInOrder, endNode);
  startNode.previousNode = null;
  return nodesInOrder;
};

const recurse = (grid, node, nodesInOrder, endNode) => {
  if (node.isEnd) {
    nodesInOrder.push(node);
    return true;
  }
  let res = false;
  nodesInOrder.push(node);
  let neighbours = getNeighbours(grid, node);
  for (let i = 0; i < neighbours.length; i++) {
    let nei = neighbours[i];
    nei.isVisited = true;
    nei.previousNode = node;

    res = recurse(grid, nei, nodesInOrder, endNode);
    if (res) {
      break;
    }
  }
  return res;
};

const getNeighbours = (grid, node) => {
  const nodes = [];
  const { row, col } = node;
  if (row > 0) {
    nodes.push(grid[row - 1][col]);
  }
  if (col < grid[0].length - 1) {
    nodes.push(grid[row][col + 1]);
  }
  if (row < grid.length - 1) {
    nodes.push(grid[row + 1][col]);
  }

  if (col > 0) {
    nodes.push(grid[row][col - 1]);
  }

  return nodes.filter((nei) => !nei.isVisited);
};
