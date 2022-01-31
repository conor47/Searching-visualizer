export const randomTerrain = (grid, start, end) => {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    const row = [];
    for (let j = 0; j < grid[0].length; j++) {
      if (
        (i === start.row && j === start.col) ||
        (i === end.row && j === end.col)
      ) {
        continue;
      }
      const oldNode = grid[i][j];
      const rand = getRand(0, 1);
      const updatedNode = { ...oldNode, isWall: rand === 0 };
      row.push(updatedNode);
    }
    newGrid.push(row);
  }
  return newGrid;
};

const getRand = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
