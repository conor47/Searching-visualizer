export const astar = (grid, startNode, endNode) => {
  startNode.hCost = 0;
  startNode.gCost = 0;
  startNode.fCost = 0;
  let openSet = [startNode];
  let closedSet = new Set();
  const nodesInOrder = [];

  while (openSet.length > 0) {
    let idx = 0;
    let currentNode = openSet[0];

    for (let i = 1; i < openSet.length; i++) {
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
    openSet.splice(idx, 1);
    closedSet.add(currentNode);
    nodesInOrder.push(currentNode);

    if (currentNode === endNode) {
      return { nodes: nodesInOrder, success: endNode.isVisited };
    }

    const neighbours = getNeighbours(grid, currentNode);
    for (let nei of neighbours) {
      if (closedSet.has(nei)) {
        continue;
      }

      const newCostToNeighbour =
        currentNode.gCost + getDistance(currentNode, nei);
      if (
        newCostToNeighbour < nei.gCost ||
        !openSet.find((node) => node === nei)
      ) {
        nei.gCost = newCostToNeighbour;
        nei.hCost = getDistance(nei, endNode);
        nei.fCost = nei.gCost + nei.hCost;
        nei.previousNode = currentNode;
        nei.isVisited = true;

        if (!openSet.find((node) => node === nei)) {
          openSet.push(nei);
        }
      }
    }
  }
  return { nodes: nodesInOrder, success: endNode.isVisited };
};

const getDistance = (nodeA, nodeB) => {
  const distX = Math.abs(nodeA.col - nodeB.col);
  const distY = Math.abs(nodeA.row - nodeB.row);
  return distX + distY;

  //   if (distX > distY) {
  //     return 14 * distY + 10 * (distX - distY);
  //   } else {
  //     return 14 * distX + 10 * (distY - distX);
  //   }
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
  //   if (col > 0 && row > 0) {
  //     nodes.push(grid[row - 1][col - 1]);
  //   }
  //   if (col < grid[0].length - 1 && row > 0) {
  //     nodes.push(grid[row - 1][col + 1]);
  //   }
  //   if (row < grid.length - 1 && col > 0) {
  //     nodes.push(grid[row + 1][col - 1]);
  //   }
  //   if (row < grid.length - 1 && col < grid[0].length - 1) {
  //     nodes.push(grid[row + 1][col + 1]);
  //   }
  return nodes.filter((nei) => !nei.isWall);
};

export const getShortestPathAStar = (endNode, grid) => {
  let cur = endNode;
  const nodes = [];
  while (cur) {
    nodes.push(cur);
    cur = cur.previousNode;
  }
  return nodes;
};
