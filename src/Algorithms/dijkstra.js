export const dijkstra = (grid, startNode, endNode) => {
  startNode.distance = 0;
  const nodesInOrder = [];
  const unvisitedNodes = getAllNodes(grid);

  while (unvisitedNodes.length > 0) {
    sortNodesByDistance(unvisitedNodes);
    let closestNode = unvisitedNodes.shift();

    if (closestNode.distance === Infinity) {
      return nodesInOrder;
    }

    if (closestNode.isWall) {
      continue;
    }

    closestNode.isVisited = true;
    nodesInOrder.push(closestNode);
    if (closestNode === endNode) {
      return nodesInOrder;
    }
    updateUnvisitedNeighbours(closestNode, grid);
  }
};

const getAllNodes = (grid) => {
  let nodes = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      nodes.push(grid[i][j]);
    }
  }
  return nodes;
};

const sortNodesByDistance = (unvisitedNodes) => {
  unvisitedNodes.sort((nodeA, nodeB) => {
    return nodeA.distance - nodeB.distance;
  });
};

const updateUnvisitedNeighbours = (node, grid) => {
  let unvisitedNeighbours = getUnvisitedNeighbours(node, grid);
  for (let nei of unvisitedNeighbours) {
    nei.distance = node.distance + 1;
    nei.previousNode = node;
  }
};

const getUnvisitedNeighbours = (node, grid) => {
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

export const getShortestPath = (endNode) => {
  const nodes = [];
  let cur = endNode;
  while (cur !== null) {
    nodes.unshift(cur);
    cur = cur.previousNode;
  }
  return nodes;
};
