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
      nodeA.isVisited = true;

      let nodesA = getNeighbours(grid, nodeA, visitedA);
      for (let i = 0; i < nodesA.length; i++) {
        if (visitedB.has(nodesA[i])) {
          nodesA[i].isVisited = true;
          startNode.previousNode = null;
          endNode.previousNode = null;
          nodesInOrder.push(nodesA[i]);
          return {
            nodes: nodesInOrder,
            middleA: nodeA,
            middleB: nodesA[i],
            success: endNode.isVisited,
          };
        }
        queueA.push(nodesA[i]);
        visitedA.add(nodesA[i]);
        nodesA[i].previousNode = nodeA;
        nodesA[i].isVisited = true;
        nodesInOrder.push(nodesA[i]);
      }
    }

    if (queueB.length) {
      let nodeB = queueB.shift();
      nodeB.isVisited = true;
      let nodesB = getNeighbours(grid, nodeB, visitedB);
      for (let i = 0; i < nodesB.length; i++) {
        if (visitedA.has(nodesB[i])) {
          nodesInOrder.push(nodesB[i]);
          nodesB[i].isVisited = true;
          startNode.previousNode = null;
          endNode.previousNode = null;
          return {
            nodes: nodesInOrder,
            middleA: nodesB[i],
            middleB: nodeB,
            success: endNode.isVisited,
          };
        }
        queueB.push(nodesB[i]);
        visitedB.add(nodesB[i]);
        nodesB[i].previousNode = nodeB;
        nodesB[i].isVisited = true;
        nodesInOrder.push(nodesB[i]);
      }
    }
  }
  startNode.previousNode = null;
  return { nodes: nodesInOrder, success: endNode.isVisted };
};

const getNeighbours = (grid, node, visited) => {
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
  return nodes.filter((nei) => !visited.has(nei) && !nei.isWall);
};

export const getShortestPathBiDirectional = (endNode, middleA, middleB) => {
  const nodes = [];
  if (!endNode.isVisited) {
    return [];
  }
  let cur = middleA;
  while (cur !== null) {
    nodes.unshift(cur);
    cur = cur.previousNode;
  }

  cur = middleB;
  while (cur !== null) {
    nodes.push(cur);
    cur = cur.previousNode;
  }

  return nodes;
};
