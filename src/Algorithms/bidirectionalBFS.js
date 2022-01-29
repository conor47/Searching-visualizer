export const bidrectionalBFS = (grid, startNode, endNode) => {
  const nodesInOrder = [];
  const queueA = [];
  const queueB = [];
  const visitedA = new Set();
  const visitedB = new Set();
  visitedA.add(startNode);
  visitedB.add(endNode);
  queueA.push(startNode);
  queueB.push(endNode);

  while (queueA.length > 0 || queueB.length > 0) {
    if (queueA.length) {
      let nodeA = queueA.shift();
      let nodesA = getAdjacentNodes(grid, nodeA, visitedB);
      for (let i = 0; i < nodesA.length; i++) {
        if (visitedB.has(nodesA[i])) {
          return nodesInOrder;
        }
        queueA.push(nodesA[i]);
        visitedA.add(nodesA[i]);
        nodesA[i].isVisited = true;
        nodesInOrder.push(nodesA[i]);
      }
    }

    if (queueB.length) {
      let nodeB = queueB.shift();
      let nodesB = getAdjacentNodes(grid, nodeB, visitedA);
      for (let i = 0; i < nodesB.length; i++) {
        if (visitedA.has(nodesB[i])) {
          return nodesInOrder;
        }
        queueB.push(nodesB[i]);
        visitedB.add(nodesB[i]);
        nodesB[i].isVisited = true;
        nodesInOrder.push(nodesB[i]);
      }
    }
  }
  startNode.previousNode = null;
  return nodesInOrder;
};

const getAdjacentNodes = (grid, node) => {
  let neighbours = getNeighbours(grid, node);
  const nodes = [];
  for (let i = 0; i < neighbours.length; i++) {
    nodes.push(neighbours[i]);
  }
  return nodes;
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
