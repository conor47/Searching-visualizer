const mazeGenerator = (grid) => {
  const visited = new Set();

  const generateIteratively = (nodeKey) => {
    visited.add(nodeKey);
    const node = getNodeFromKey();
    node.isVisited = true;

    const neighbours = getNeighbours(node);
    while (neighbours.length > 0) {
      const ki = roulette(neighbours);

      if (!visited.has(ki)) {
        const adj = getNeighbours;
      }
    }
  };

  const getNodeFromKey = (nodeKey) => {
    const [row, col] = nodeKey.split('.');
    return grid[row][col];
  };

  const getNeighbours = (node) => {
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

  const generateKey = (node) => {
    return `${node.row}.${node.col}`;
  };

  const roulette = (nodes) => {
    const roll = Math.random() * nodes.length;

    let sum = 0;
    for (let i = 0; i < nodes.length; i++) {
      sum += 1.0;
      if (roll < sum) {
        const res = nodes[i];
        nodes = nodes.splice(i, 1);
        return res;
      }
    }
  };
};
